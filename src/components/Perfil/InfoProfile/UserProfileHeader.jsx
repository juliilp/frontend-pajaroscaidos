import Link from "next/link";
import Image from "next/image";
import Banner from "@/../public/images/Perfil/bannerPerfil.webp";

export default function UserProfileHeader({ avatar, admin }) {
  return (
    <header className="flex relative h-20 lg:h-28 w-full items-center">
      <Image src={Banner} alt="banner" fill priority className="rounded-lg" />
      {avatar && avatar.secure_url && (
        <div className="relative flex w-full ml-6 mr-4 justify-between">
          <Image
            src={avatar.secure_url}
            alt="Profile Image"
            width={100}
            height={100}
            className="h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full"
          />
          {admin && (
            <button className="py-1 px-2 rounded-md h-fit border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] text-white hover:text-black">
              <Link href="/dashboard" className="font-semibold ">
                Panel Administador
              </Link>
            </button>
          )}
        </div>
      )}
    </header>
  );
}
