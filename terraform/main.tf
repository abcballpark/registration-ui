resource "aws_cognito_user_pool" "users" {
  name = local.auth.pool_name

  # username_attributes = ["username"]
  alias_attributes = ["email"]

  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  password_policy {
    minimum_length                   = 8
    require_lowercase                = true
    require_uppercase                = true
    require_numbers                  = true
    require_symbols                  = false
    temporary_password_validity_days = 7
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
  name            = "${local.auth.pool_name}-next-auth"
  user_pool_id    = aws_cognito_user_pool.users.id
  generate_secret = true

  access_token_validity  = 60
  id_token_validity      = 60
  refresh_token_validity = 10

  callback_urls = [
    "https://localhost:9001/api/auth/callback/cognito"
  ]

  allowed_oauth_scopes = ["email", "openid", "phone", "profile"]
  allowed_oauth_flows  = ["code"]

  supported_identity_providers = ["COGNITO"]

  allowed_oauth_flows_user_pool_client = true




  token_validity_units {
    access_token  = "minutes"
    id_token      = "minutes"
    refresh_token = "days"
  }
}

resource "aws_cognito_user_pool_domain" "name" {
  domain       = local.auth.pool_name
  user_pool_id = aws_cognito_user_pool.users.id
}

# resource "aws_cognito_user_pool_ui_customization" "name" {
#   client_id = aws_cognito_user_pool_client.users.id

#   user_pool_id = aws_cognito_user_pool.users.id
# }
