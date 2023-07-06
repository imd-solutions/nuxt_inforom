locals {
  # https://gitlab.com/ggmr/tm-forum/tmf-inform-cms
  # Hard-coded because this is the GitLab project of this repo
  gitlab_project = "ggmr/tm-forum/tmf-inform-frontend"
}

data "gitlab_project" "inform_frontend" {
  path_with_namespace = local.gitlab_project
}

resource "gitlab_deploy_token" "container_img_registry" {
  project = data.gitlab_project.inform_frontend.id
  name    = "TM Forum K8s cluster image pull token for ${module.inform_label.id} (${var.env})"
  scopes = [
    "read_registry"
  ]
}
