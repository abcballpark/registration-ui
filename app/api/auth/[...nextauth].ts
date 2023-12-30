import NextAuth from 'next-auth';
import Cognito from 'next-auth/providers/cognito';

export default NextAuth({
    providers: [
        Cognito({
            name: "Cognito",
            clientId: "",
            clientSecret: "",
            issuer: `https://cognito-idp.${REGION}.amazonaws.com/${POOL_ID}`
        })
    ]
})