"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink() {
  const pathname = usePathname();

  const links = [
    { path: "/dashboard", label: "Opciones de inicio" },
    { path: "/dashboard/galeria-solidaria", label: "Galeria solidaria" },
    { path: "/dashboard/publicaciones", label: "Publicaciones" },
    { path: "/dashboard/usuarios", label: "Usuarios" },
  ];

  return (
    <ul className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`flex items-center hover:bg-[#444444] py-2 ${
            pathname === link.path && "bg-[#444444]"
          }`}
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
          <span>{link.label}</span>
        </Link>
      ))}
    </ul>
  );
}
