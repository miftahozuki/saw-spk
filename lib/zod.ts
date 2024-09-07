import { z } from "zod"
 
export const loginSchema = z.object({
  username: z.string({ required_error: "Username is required" })
    .min(1, "Username is required")
    .max(10, "Username tidak valid"),
  password: z.string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .max(32, "Password must be less than 32 characters"),
    role: z.string(),
    redirectTo: z.string()
})