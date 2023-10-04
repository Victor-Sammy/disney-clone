import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { useRouter } from 'next/router'

const router = useRouter()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async redirect({ url }) {
      //const URLs = window.location.pathname
      //     // Allows relative callback URLs
      if (url.includes('/login')) return '/'
      if (!url.includes('/')) return '/'
      return url
    },
  },
})

// useEffect(() => {
//   const router = useRouter()
//   const URLs = window.location.pathname
//   // Allows relative callback URLs
//   if (URLs.includes('/login'))
//     router.push({
//       pathname: `${window.location.pathname.slice(0, -5)}`,
//     })
// })
