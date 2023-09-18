import React from "react";

export default function page() {
  return (
    <section className="h-full w-full p-5 flex-col items-center gap-3">
      <h1 className="text-center text-2xl font-bold">Usuarios</h1>
      <div className="bg-[#4f4f4f] flex flex-col items-center gap-2 p-3 rounded-2xl text-white">
        <ul className="flex w-full pl-1 pr-10 py-3 font-bold text-center">
          <div className="flex gap-3">
            <li className="w-[80px]">
              <span>Avatar</span>
            </li>
            <li className="w-[360px]">
              <span>Email</span>
            </li>
          </div>
          <li className="w-2/5">
            <span>Nickname</span>
          </li>
          <li className="w-1/5">
            <span>Voluntario</span>
          </li>
          <li className="w-1/5">
            <span>Admin</span>
          </li>
          <li className="w-1/5">
            <span>Baneado</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
