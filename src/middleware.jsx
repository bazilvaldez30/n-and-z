import { NextResponse } from 'next/server'

export default function middleware(request) {
  const isAuthenticated = request.cookies.has('user')
  const pathname = request.nextUrl.pathname

  // Redirect unauthenticated users to the /login route for protected routes
  if (!isAuthenticated && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect authenticated users away from the /login route
  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [],
}
