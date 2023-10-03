import Image from "next/image";
import Banner from "@/../public/images/Perfil/BannerPerfil.webp";

export default function UserProfileHeader({ avatar }) {
  return (
    <header className="flex relative h-28 w-full items-center">
      <Image src={Banner} alt="banner" fill priority className="rounded-lg" />
      {avatar && avatar.secure_url && (
        <Image
          src={avatar.secure_url}
          alt="Profile Image"
          width={80}
          height={80}
          className="relative h-[80px] w-[80px] ml-6 rounded-full"
        />
      )}
    </header>
  );
}
