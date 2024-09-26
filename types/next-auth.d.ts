import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User {
        username: string
    }

    interface Session {
        user: User & {
            username: string
        }
    }
}


 
declare module "next-auth/jwt" {
  interface JWT {
    username: string
    id: string
  }
}
