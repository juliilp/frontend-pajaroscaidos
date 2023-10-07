import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";

export default function UserList({ users, toggleModal }) {
  return (
    <>
      {users.map((user) => (
        <tr key={user.id} onClick={() => toggleModal(user.id)}>
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
          <td className="truncate">{user.nick_name}</td>
        </tr>
      ))}
    </>
  );
}
