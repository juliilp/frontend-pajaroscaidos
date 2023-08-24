import { NextResponse } from "next/server";

export async function middleware(req) {
  const sesion = req.cookies.get("user");
  const isActiveSesion= sesion.value !== 'null'
  
  if (isActiveSesion) {//cuando la sesion esta activa se restringira las 
    // const resquestedPage = req.nextUrl.pathname; //ruta solicitada
    const url = req.nextUrl.clone(); //clonamos la url(localhost o deploy)
    url.pathname = "/"; ///seteamos la url a donde redirigiremos
     return NextResponse.redirect(url); //redirigimos a url base
  
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/registro"],//rutas a donde se va a aplicar el middleware
};