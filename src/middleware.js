import { NextResponse } from "next/server";

export async function middleware(req) {
  const sesion = req.cookies.get("user");
  const existCookie = sesion ? true : false;
  const isActiveSesion = sesion?.value !== "null";
  const privateRoutes = ["/perfil"];
  const otherRoutes = ["/login", "/registro"];
  const resquestedPage = req.nextUrl.pathname;
  const inAdminPages = resquestedPage.includes("/dashboard");

  let isAdmin = null;

  if (sesion && sesion?.value !== "null") {
    const value = JSON.parse(sesion?.value);

    isAdmin = value?.isAdmin;
    const isPrincipalAdmin = value?.isPrincipalAdmin; // ?
  }
  const url = req.nextUrl.clone();
  url.pathname = "/";
  if (existCookie && inAdminPages && !isAdmin) {
    ///validacion admins
    return NextResponse.redirect(url);
  }
  if (privateRoutes.includes(resquestedPage) && !isActiveSesion && existCookie) {
    return NextResponse.redirect(url);
  } else if (existCookie && isActiveSesion && otherRoutes.includes(resquestedPage)) {
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/registro", "/perfil", "/dashboard", "/dashboard/((?!general).*)"],
};
