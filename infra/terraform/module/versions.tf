terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.8.0"
    }
    gitlab = {
      source  = "gitlabhq/gitlab"
      version = "~> 3.12.0"
    }
  }
  required_version = ">= 1.0.0"
}
