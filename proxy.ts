import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Optimize proxy by reducing overhead
export function proxy(request: NextRequest) {
  // TODO: Replace with real Supabase Auth logic
  // e.g., const supabase = createMiddlewareClient({ req, res });
  // const { data: { session } } = await supabase.auth.getSession();
  
  // For now, use a mock auth flag
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dar-el-meamar-landing/dashboard');

  if (isDashboardRoute) {
    const isMockAuthEnabled = process.env.NEXT_PUBLIC_MOCK_AUTH === 'true';
    if (!isMockAuthEnabled) {
      // Redirect to login or home if not authenticated
      return NextResponse.redirect(new URL('/dar-el-meamar-landing', request.url));
    }
  }

  // Fast passthrough for public routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (public assets - cache-friendly)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
