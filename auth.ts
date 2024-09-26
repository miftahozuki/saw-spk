import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "./lib/action";

// import {bcrypt} from "bcryptjs"

const bcrypt = require("bcryptjs")
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy:"jwt"
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async(credentials) => {
        let user = null
        user = await getUserByUsername(credentials.username as string)
        
        if (!user) {
          return null
        }

        const isMatch = bcrypt.compareSync(
          credentials.password, user.password
        )

        if(!isMatch) {
          return null
        }
        console.log(user);
        
        return user
      }
    })
  ],
  callbacks: {
    async jwt({token, user, trigger, session}) {
      if(trigger == 'update' && session.name) {
        token.name = session.name
      }

      if (user) {
        token.username = user.username
        token.id = user.id ?? ''
      }
      
      
      return token
      
    },
    async session({ session, token}) {
      session.user.username = token.username
      session.user.id = token.id

      return session
    }
  }
})