"use client";

import React from "react";
import Usuarios from "./usuarios.json";
import Image from "next/image";
import {
  BiSolidUser,
  BiDotsVerticalRounded,
  BiCheckbox,
  BiCheckboxChecked,
} from "react-icons/bi";

export default function Page() {
  return (
    <section className="h-full w-full p-5 flex-col items-center gap-3">
      <h1 className="text-center py-2 text-2xl font-bold">Usuarios</h1>
      <div className="bg-[#4f4f4f] flex flex-col gap-2 p-3 rounded-2xl text-white">
        <table className=" w-full table-auto text-center border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th>
                <strong>Avatar</strong>
              </th>
              <th>
                <strong>Email</strong>
              </th>
              <th>
                <strong>Nickname</strong>
              </th>
              <th>
                <strong>Voluntario</strong>
              </th>
              <th>
                <strong>Admin</strong>
              </th>
              <th>
                <strong>Baneado</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Usuarios.users.map((usuario) => (
              <tr key={usuario.id}>
                <td className="flex justify-center">
                  {usuario.avatar.avatar_url !== "-" ? (
                    <Image
                      src={
                        usuario.avatar.avatar_url
                          ? usuario.avatar.avatar_url
                          : usuario.avatar.secure_url
                      }
                      alt={usuario.id}
                      width={100}
                      height={100}
                      className="h-[50px] w-[50px] rounded-lg"
                    />
                  ) : (
                    <BiSolidUser size={50} color="white" />
                  )}
                </td>
                <td className="truncate">{usuario.email}</td>
                <td className="truncate">{usuario.nick_name}</td>
                <td>
                  {usuario.isVoluntary ? (
                    <BiCheckboxChecked
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  ) : (
                    <BiCheckbox
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  )}
                </td>
                <td>
                  {usuario.isAdmin ? (
                    <BiCheckboxChecked
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  ) : (
                    <BiCheckbox
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  )}
                </td>
                <td>
                  {usuario.isBanned ? (
                    <BiCheckboxChecked
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  ) : (
                    <BiCheckbox
                      size={30}
                      color="white"
                      className="w-full flex justify-center"
                    />
                  )}
                </td>
                <td>
                  <BiDotsVerticalRounded
                    size={30}
                    color="white"
                    className="w-full flex justify-center"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
