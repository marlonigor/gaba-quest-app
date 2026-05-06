import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      level: number
      xp: number
      currentStreak: number
    } & DefaultSession["user"]
  }

  interface User {
    level: number
    xp: number
    currentStreak: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}
