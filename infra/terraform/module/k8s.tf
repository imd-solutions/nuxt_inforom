resource "kubernetes_secret" "inform_img_pull" {
  metadata {
    name      = "${module.inform_label.id}-img-pull"
    namespace = var.namespace
  }

  type = "kubernetes.io/dockerconfigjson"
  data = {
    ".dockerconfigjson" = jsonencode(
      {
        auths = {
          "registry.gitlab.com" = {
            auth = base64encode(
              "${gitlab_deploy_token.container_img_registry.username}:${gitlab_deploy_token.container_img_registry.token}"
            )
          }
        }
      }
    )
  }
}

resource "kubernetes_config_map" "inform" {
  metadata {
    name      = "${module.inform_label.id}-configmap"
    namespace = var.namespace
  }
  data = {
    BASE_URL           = var.base_url
    OIDC_HOST          = var.oidc_host
    OIDC_CLIENT_ID     = var.oidc_client_id
    OIDC_CALLBACK_PATH = var.oidc_callback_path
    OIDC_REDIRECT_URL  = var.oidc_redirect_url
    SENTRY_DSN         = var.sentry_dsn
    SENTRY_ENV         = var.env
  }
}

resource "kubernetes_deployment" "inform" {
  lifecycle {
    ignore_changes = [
      # Reloader changes an env var here when the configmap changes
      spec[0].template[0].spec[0].container[0].env
    ]
  }

  metadata {
    name      = module.inform_label.id
    namespace = var.namespace
    labels = {
      app = module.inform_label.id
    }
    annotations = {
      "reloader.stakater.com/auto" = true
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = module.inform_label.id
      }
    }

    template {
      metadata {
        labels = {
          app = module.inform_label.id
        }
      }

      spec {
        container {
          image = var.image
          name  = module.inform_label.id
          env_from {
            config_map_ref {
              name = kubernetes_config_map.inform.metadata[0].name
            }
          }
        }
        image_pull_secrets {
          name = kubernetes_secret.inform_img_pull.metadata[0].name
        }
        # service_account_name = kubernetes_service_account.inform.metadata[0].name
      }
    }
  }
}

resource "kubernetes_service" "inform" {
  metadata {
    name      = module.inform_label.id
    namespace = var.namespace
  }

  spec {
    selector = {
      app = module.inform_label.id
    }
    port {
      port        = 3000
      target_port = 3000
    }
  }
}

# resource "kubernetes_ingress" "inform" {
#   metadata {
#     name      = module.inform_label.id
#     namespace = var.namespace
#     annotations = {
#       "kubernetes.io/ingress.class"              = "traefik"
#       "cert-manager.io/cluster-issuer"           = var.cert_manager_issuer
#       "traefik.ingress.kubernetes.io/router.tls" = true
#     }
#   }
#   spec {
#     tls {
#       hosts = [
#         "${var.subdomain}.${var.domain}"
#       ]
#       secret_name = replace("${var.subdomain}-${var.domain}-tls", ".", "-")
#     }
#     rule {
#       host = "${var.subdomain}.${var.domain}"
#       http {
#         path {
#           path = "/"
#           backend {
#             service_name = kubernetes_service.inform.metadata[0].name
#             service_port = kubernetes_service.inform.spec[0].port[0].port
#           }
#         }
#       }
#     }
#   }
# }
