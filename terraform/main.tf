resource "aws_cognito_user_pool" "users" {
  name = local.auth.pool_name

  # username_attributes = ["username"]
  alias_attributes = ["email"]

  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_uppercase = true
    require_numbers   = true
    require_symbols   = false
  }

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  ## Attributes
  schema {
    name                     = "email"
    attribute_data_type      = "String"
    required                 = true
    developer_only_attribute = false

  }
}

resource "aws_cognito_user_pool_client" "users" {
  name         = "${local.auth.pool_name}-next-auth"
  user_pool_id = aws_cognito_user_pool.users.id

  access_token_validity  = 3600
  id_token_validity      = 60
  refresh_token_validity = 10

  token_validity_units {
    access_token  = "seconds"
    id_token      = "minutes"
    refresh_token = "days"
  }
}