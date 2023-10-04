import Image from "next/image";
import Banner from "@/../public/images/Perfil/BannerPerfil.webp";

export default function UserProfileHeader({ avatar }) {
  return (
    <header className="flex relative h-20 lg:h-28 w-full items-center">
      <Image src={Banner} alt="banner" fill priority className="rounded-lg" />
      {avatar && avatar.secure_url && (
        <div className="flex w-full mx-6">
          <Image
            src={avatar.secure_url}
            alt="Profile Image"
            width={100}
            height={100}
            className="relative h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] rounded-full"
          />
        </div>
      )}
    </header>
  );
}
