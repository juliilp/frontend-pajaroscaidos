import "@/styles/DropdownMenu.css";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import {
  BiSolidUser,
  BiDotsVerticalRounded,
  BiCheckbox,
  BiCheckboxChecked,
} from "react-icons/bi";

export default function UserList({ users, onDataUpdate }) {
  const [openMenus, setOpenMenus] = useState({});
  const menuRefs = useRef({});

  useEffect(() => {
    const handleOutsideClick = (event) => {
      Object.keys(menuRefs.current).forEach((userId) => {
        if (
          menuRefs.current[userId] &&
          !menuRefs.current[userId].contains(event.target)
        ) {
          setOpenMenus((prevOpenMenus) => ({
            ...prevOpenMenus,
            [userId]: false,
          }));
        }
      });
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (userId) => {
    setOpenMenus((prevOpenMenus) => {
      const updatedOpenMenus = { ...prevOpenMenus };

      Object.keys(updatedOpenMenus).forEach((menuId) => {
        if (menuId !== userId) {
          updatedOpenMenus[menuId] = false;
        }
      });

      updatedOpenMenus[userId] = !prevOpenMenus[userId];
      return updatedOpenMenus;
    });
  };

  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="flex justify-center">
            {user.avatar.avatar_url !== "-" ? (
              <Image
                src={
                  user.avatar.avatar_url
                    ? user.avatar.avatar_url
                    : user.avatar.secure_url
                }
                alt={user.id}
                width={100}
                height={100}
                className="h-[40px] w-[40px] rounded-lg"
              />
            ) : (
              <BiSolidUser size={40} color="white" />
            )}
          </td>
          <td className="truncate">{user.email}</td>
          <td className="truncate">{user.nick_name}</td>
          <td>
            {user.isVoluntary ? (
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
            {user.isAdmin ? (
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
            {user.isBanned ? (
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
          <td
            ref={(ref) => (menuRefs.current[user.id] = ref)}
            onClick={() => toggleMenu(user.id)}
          >
            <BiDotsVerticalRounded
              size={30}
              color="white"
              className="w-full flex justify-center cursor-pointer"
            />
            <div
              className={`dropdown-menu ${
                openMenus[user.id] ? "active" : "inactive"
              }`}
            >
              <DropdownMenu
                user={user}
                onClick={() => toggleMenu(user.id)}
                onDataUpdate={onDataUpdate}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
