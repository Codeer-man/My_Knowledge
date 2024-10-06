export const config = {
  matcher: ["/api/auth/:path*", "/protected/:path*"],
};
export { auth as middleware } from "@/auth";
