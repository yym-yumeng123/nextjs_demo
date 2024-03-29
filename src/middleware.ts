import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import { NextRequest, NextResponse } from "next/server"
// import { authenticate } from 'auth-provider'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  async afterAuth(auth, req, evt) {
    console.log("🚀 ~ afterAuth ~ auth:", auth.userId)
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({
        returnBackUrl: req.url,
      })
    }

    const result = await fetch(process.env.API_ADDRESS + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: auth.userId,
      }),
    })

    await result.json()
  },
})

export const config = {
  matcher: ["/"],
}

// export function middleware(request: NextRequest) {
//   const isAuthenticated = authenticate(request)

//   // If the user is authenticated, continue as normal
//   if (isAuthenticated) {
//     return NextResponse.next()
//   }

//   return NextResponse.redirect(new URL('/login', request.url))
// }
