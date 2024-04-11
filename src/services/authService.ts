import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt from 'next-auth/jwt'

const getGoogleCredentials = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_ID");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET ");
  }

  return { clientId, clientSecret };
};

export const authOptions: NextAuthOptions = {
  // adapter: FirestoreAdapter(fb_app),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [

    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  logger: {
    error(code, ...message) {
      console.log(code, message, "error block");
    },
  },
  
  callbacks: {
    async jwt({ token, user, account }) {
      // const dbUser = (await db.get(`user:${token.id}`)) as User | null

      // const dbUserResult = await fetchRedis('get', `user:${token.id}`) as string | null

      console.log(token, "token");
      console.log(user, "user");
      console.log(account, 'account')
      const dbUserResult = {};

      if (!dbUserResult) {
        token.id = user!.id;
        return token;
      }

      // const dbUser = JSON.parse(dbUserResult) as User

      const dbUser = { id: "", email: "", name: "", image: "" };

      return {
        id: dbUser.id,
        email: dbUser.email,
        name: dbUser.name,
        picture: dbUser.image,
      };
    },
    async session({ session, token }:any) {
      if (token) {
        // console.log(session, "session");
        // console.log(token, "token");
        session.user.id = token.id
        // session.user.name = token.name
        // session.user.email = token.email
        // session.user.image = token.picture
      }
      return session;
    },
    redirect() {
      return "/";
    },
  },
};
