import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'db'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: 'supersecretkey',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user = { ...user }
      }
      return session
    }
  }
})
