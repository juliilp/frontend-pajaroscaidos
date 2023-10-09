import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";

export default function UserList({ users, toggleModal }) {
  return (
    <>
      {users.map(({ id, avatar, nick_name }) => (
        <tr key={id} onClick={() => toggleModal(id)}>
          <td className="flex justify-center">
            {avatar.avatar_url !== "-" ? (
              <Image
                src={avatar.avatar_url || avatar.secure_url}
                alt={id}
                width={100}
                height={100}
                className="h-[40px] w-[40px] rounded-lg"
              />
            ) : (
              <BiSolidUser size={40} />
            )}
          </td>
          <td className="truncate">{nick_name}</td>
        </tr>
      ))}
    </>
  );
}
