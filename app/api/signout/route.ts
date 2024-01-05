import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = async () => {
    // TODO: Pull these in from vars or something
    const logout_uri = "https://localhost:9001/api/auth/signout";
    const region = "us-east-1"
    const client_id = "hdin85cv7oeie3fklbtj7485h";
    const cognito_domain = "abc-auth";
    const params = {
      client_id: client_id,
      logout_uri: logout_uri,
    };
    const uri = `https://${cognito_domain}.auth.${region}.amazoncognito.com/logout?${querystring.encode(params)}`;
    const res = await fetch(uri);
    return Response.json(res);
  };
