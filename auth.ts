import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "./lib/action";

// import {bcrypt} from "bcryptjs"

const bcrypt = require("bcryptjs")
 
export const { handlers, signIn, signOut, auth } = NextAuth({
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
        // console.log(user);
        
        return user
      }
    })
  ],
})