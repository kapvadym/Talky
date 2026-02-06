import { 
  convexAuthNextjsMiddleware, 
  createRouteMatcher, 
  nextjsMiddlewareRedirect 
} from "@convex-dev/auth/nextjs/server";

 
const isPublicPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  if(!isPublicPage(request) && !(await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, "/signin")
  }

  //TODO: Redirect user away from "/signin" if authenticated
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};