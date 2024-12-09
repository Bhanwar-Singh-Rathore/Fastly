// import { authMiddleware } from '@clerk/nextjs/server'

// import { NextResponse } from 'next/server'

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//   publicRoutes: ['/'],
//   async beforeAuth(auth, req) {},
//   async afterAuth(auth, req) {
//     //rewrite for domains
  

//     const url = req.nextUrl
//     const searchParams = url.searchParams.toString()
//     const pathWithSearchParams = `${url.pathname}${
//       searchParams.length > 0 ? `?${searchParams}` : ''
//     }`
//     if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
//       return NextResponse.redirect(new URL(`/user/sign-in`, req.url))
//     }

//     // if (
//     //   url.pathname === '/' ||
//     //   (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
//     // ) {
//     //   return NextResponse.rewrite(new URL('/site', req.url))
//     // }

//     if (
//       url.pathname.startsWith('/user')
//     ) {
//       return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//     }
//   },
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }


// import { authMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

// export default authMiddleware({
//   publicRoutes: ['/'], // Define public routes that don't require authentication
//   async beforeAuth(auth, req) {},
//   async afterAuth(auth, req) {
//     const url = req.nextUrl
//     const searchParams = url.searchParams.toString()
//     const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`

//     // Redirect the user to /user if they're already signed in and trying to access sign-in or sign-up
//     if ((url.pathname === '/sign-in' || url.pathname === '/sign-up') && auth.user) {
//       return NextResponse.redirect(new URL('/user', req.url)) // Redirect to /user if signed in
//     }

//     // Handle other routes for authenticated users
//     if (url.pathname.startsWith('/user') && !auth.user) {
//       // If the user is not authenticated and tries to access /user, redirect to /sign-in
//       return NextResponse.redirect(new URL('/sign-in', req.url))
//     }

//     // For other paths, keep the flow as is
//     return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//   },
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }

// import { authMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

// export default authMiddleware({
//   publicRoutes: ['/'], // Define public routes that don't require authentication
//   async beforeAuth(auth, req) {},
//   async afterAuth(auth, req) {
//     const url = req.nextUrl
//     const searchParams = url.searchParams.toString()
//     const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`

//     // Check if the user is authenticated using `auth.userId`
//     if (auth.userId) {
//       // If the user is authenticated, redirect them to /user
//       if (url.pathname === '/user/sign-in' || url.pathname === '/sign-up') {
//         return NextResponse.redirect(new URL('/user', req.url))
//       }
//     } else {
//       // If the user is not authenticated, redirect them to /user/sign-in
//       if (url.pathname !== '/user/sign-in' && url.pathname !== '/sign-up') {
//         return NextResponse.redirect(new URL('/user/sign-in', req.url))
//       }
//     }

//     // For other paths, rewrite the URL with search params
//     return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//   },
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }


import { authMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default authMiddleware({
  publicRoutes: ['/','/api/uploadthing'],  // Define public routes that don't require authentication
  async beforeAuth() {},
  async afterAuth(auth, req) {
    const url = req.nextUrl
    const searchParams = url.searchParams.toString()
    const pathWithSearchParams = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`

    
    if (auth.userId) {
      if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
        return NextResponse.redirect(new URL('/user', req.url))
      }
    } else {
      
      if (url.pathname !== '/sign-in' && url.pathname !== '/sign-up') {
        return NextResponse.redirect(new URL('/sign-in', req.url))
      }
    }

    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
  },
})

export const config = {
  matcher: [
    "/((?!_next|static|sign-in|sign-up).*)",
    "/api/(.*)", // Include API routes
  ],
};

