import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CognitoProvider from 'next-auth/providers/cognito';

const region = process.env.AWS_REGION;
const poolId = process.env.COGNITO_POOL_ID;

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET as string,

    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID as string,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_APP_ID as string,
        //     clientSecret: process.env.FACEBOOK_APP_SECRET as string,
        // }),
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID as string,
            clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
            issuer: `https://cognito-idp.${region}.amazonaws.com/${poolId}`,
        }),
    ]
});

export { handler as GET, handler as POST };
