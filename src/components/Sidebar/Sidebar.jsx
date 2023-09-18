import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-[#4F4F4F] h-screen w-[20%] mt-[70px] top-0 left-0 z-[999999] text-white">
      <h1 className="font-bold text-2xl border-b-4 border-b-[#444444] text-center p-4 ">
        Panel administrador
      </h1>
      <div>
        <ul className="flex flex-col">
          <Link
            href="/dashboard"
            className="flex items-center hover:bg-[#444444] py-2"
          >
            <li>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  fill="#ffffff"
                />
              </svg>
            </li>
            <span>Opciones de inicio</span>
          </Link>
          <Link
            href="/dashboard/galeria-solidaria"
            className="flex items-center hover:bg-[#444444] py-2"
          >
            <li>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  fill="#ffffff"
                />
              </svg>
            </li>
            <span>Galeria solidaria</span>
          </Link>
          <Link
            href="/dashboard/publicaciones"
            className="flex items-center hover:bg-[#444444] py-2"
          >
            <li>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  fill="#ffffff"
                />
              </svg>
            </li>
            <span>Publicaciones</span>
          </Link>
          <Link
            href="/dashboard/usuarios"
            className="flex items-center hover:bg-[#444444] py-2"
          >
            <li>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  fill="#ffffff"
                />
              </svg>
            </li>
            <span>Usuarios</span>
          </Link>
          <Link
            href="/dashboard/publicidad"
            className="flex items-center hover:bg-[#444444] py-2"
          >
            <li>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z"
                  fill="#ffffff"
                />
              </svg>
            </li>
            <span>Publicidad</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
