import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.NEXT_PUBLIC_SECRET_KEY_DATA_JWT;

export async function middleware(req) {
  const token = req.cookies.get("user");
  const privateRoutes = ["/perfil", "foro"];
  const otherRoutes = ["/login", "/registro"];
  const requestedPage = req.nextUrl.pathname;
  const inAdminPages = requestedPage.includes("/dashboard");
  let isAdmin = null;

  // console.log("token: ", token); // => token:  { name: 'user', value: 'null' }

  if (token !== undefined && token?.value !== "null" && token?.value !== "undefined") {
    try {
      const JWT = JSON.parse(token.value);
      const decodedToken = await jwtVerify(JWT, new TextEncoder().encode(JWT_SECRET));
      isAdmin = decodedToken.payload.user.isAdmin;
    } catch (error) {
      console.error("Token no válido:", error.message);
    }
  }

  const url = req.nextUrl.clone();
  url.pathname = "/";

  if (inAdminPages && !isAdmin) {
    return NextResponse.redirect(url);
  }

  if (
    privateRoutes.includes(requestedPage) &&
    (!token || token?.value === "null" || token?.value === "undefined")
  ) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (
    token &&
    token?.value !== "null" &&
    token?.value !== "undefined" &&
    otherRoutes.includes(requestedPage)
  ) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/registro", "/perfil", "/dashboard", "/dashboard/((?!general).*)"],
};
