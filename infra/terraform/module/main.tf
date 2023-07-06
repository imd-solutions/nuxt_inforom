module "inform_label" {
  source = "cloudposse/label/null"

  namespace = "inform"
  stage     = var.env
  name      = "frontend"
}
