import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // secret: process.env.NEXTAUTH_SECRET,
    providers: [
      // OAuth authentication providers
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET,
    //   }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // Sign in with passwordless email link
    ],
    // pages: {
    //     signIn: "/auth/signin",
    //     signOut: "/auth/signout",
    //     error: "/auth/error",
    //     verifyRequest: '/auth/verify-request',
    //     newUser: '/auth/new-user'
    // }, 
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async redirect({ url, baseUrl }) {
            return baseUrl
          },
          async session({ session, user, token }) {
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            return token
          }
    }
  })

//   export default (req, res) => NextAuth(req, res, options)