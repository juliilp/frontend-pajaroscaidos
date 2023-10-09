import React from "react";
import CustomLink from "./CustomLink";

function Sidebar() {
  return (
    <aside
      className="bg-[#4F4F4F] h-auto w-[20%] pt-[70px] text-white hidden lg:block"
      id="SideBarAdmin"
    >
      <h1 className="font-bold text-2xl border-b-4 border-b-[#444444] text-center p-4 ">
        Panel administrador
      </h1>
      <CustomLink />
    </aside>
  );
}

export default Sidebar;
