import { NextResponse } from "next/server";

export async function middleware(req) {
  const sesion = req.cookies.get("user");
  const existCookie = sesion ? true : false;
  const isActiveSesion = sesion?.value !== "null";
  const privateRoutes = ["/perfil"];
  const otherRoutes = ["/login", "/registro"];
  const resquestedPage = req.nextUrl.pathname;
  if (
    privateRoutes.includes(resquestedPage) &&
    !isActiveSesion &&
    existCookie
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  } else if (
    existCookie &&
    isActiveSesion &&
    otherRoutes.includes(resquestedPage)
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/registro", "/perfil"],
};
