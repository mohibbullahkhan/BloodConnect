import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  // 2. Check if the current request path matches a protected route
  if (isProtectedRoute(req)) {
    // 3. If it matches, call auth.protect() to enforce sign-in
    await auth.protect();
    // Clerk automatically redirects unauthenticated users to the sign-in page
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
