import Link from "next/link";
export default function DonarButton() {
  return (
    <Link
      href={"https://linktr.ee/donacionpajaroscaidos"}
      className="flex items-center justify-center text-white bg-green p-2 w-[8rem] md:p-3 hover:text-gray-100 hover:bg-[#13b113]"
    >
      Donar
    </Link>
  );
}
