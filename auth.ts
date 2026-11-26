import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
export const  config = {

    pages : {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
adapter: PrismaAdapter(prisma),
    providers: [CredentialsProvider ({
        credentials: {
            email: { type: "email" },
            password: {  type: "password"},
       },
       async authorize(credentials) {
        if(credentials == null) return null;

        //find user in db
        const user = await prisma.user.findFirst({
            where: {
                email: credentials.email as string,
            }
        });
//check if user exists and password is correct
        if (user && user.password) {

        const isMatch = compareSync(credentials.password as string, user.password);

        //if password is correct return user and


    if (isMatch) {

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }
}
  //if user does not exist or password is incorrect return null
    return null;
    }
})
],
callbacks: {
    async session({session, user,trigger, token} : any) {

        session.user.id = token.sub;
        session.user.role = user.role;
        session.user.name = user.name;

        console.log(token);
        //set the user iD  from the token
        if (token.sub) {
            session.user.id = token.sub;
        }

        // if  there is an update , set the user name
        if(trigger === 'update') {
            session.user.name = user.name;
        }
        return session;
    }
    async jwt({token,user,trigger,session} : any ){
        //Assign user fields to token
        if(user ) {
token.role = user.role;

//if user has no name then use email
if(user.name === 'NO_NAME'){
 token.name = user.email!.split('@')[0];

 // Upate database to reflect the token name
 await prisma.user.update({
    where: {id: user.id},
    data: {name: token.name}
 })
}
        }
        return token;

    }
}
} satisfies NextAuthConfig;

export  const  {handlers, auth,signIn,signOut} = NextAuth(config);