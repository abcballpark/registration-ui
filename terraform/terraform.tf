terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.30.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "3.6.0"
    }
  }

  required_version = ">= 1.6.0"

  cloud {
    organization = "abcballpark"
    hostname     = "app.terraform.io"

    workspaces {
      name    = "Registration"
      project = "registration-ui"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}