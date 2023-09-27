import Image from "next/image";
import Banner from "@/../public/images/Perfil/BannerPerfil.webp";
import CalculateAge from "@/helpers/CalculateAge";
import { PiGearBold } from "react-icons/pi";

export default function InfoProfile({ user }) {
  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <header className="flex relative h-28 w-full items-center">
        <Image src={Banner} alt="banner" fill priority className="rounded-lg" />
        {user && user.avatar.secure_url && (
          <Image
            src={user.avatar.secure_url}
            alt=""
            width={80}
            height={80}
            className="relative h-[80px] w-[80px] ml-6 rounded-full border-[#C4C4C4] border-2"
          />
        )}
      </header>
      <div className="flex flex-col items-start w-full pl-4 py-1 gap-3 font-semibold text-xl">
        <div className="">
          {user.first_name || user.last_name ? (
            <h4>
              Nombre:{" "}
              <span className="font-normal text-lg">{user.first_name}</span>{" "}
              <span className="font-normal text-lg">{user.last_name}</span>
            </h4>
          ) : (
            <h4>
              Nombre: <span className="font-normal text-lg">-</span>
            </h4>
          )}
          <h4>
            Edad:{" "}
            <span className="font-normal text-lg">
              {CalculateAge(user.birth_date)}
            </span>
          </h4>
          <h4>
            Pais:{" "}
            <span className="font-normal text-lg">{user.city || "-"}</span>
          </h4>
          <h4>
            Estado / Provincia:{" "}
            <span className="font-normal text-lg">{user.province || "-"}</span>
          </h4>
        </div>
        <div className="flex justify-between w-full items-end">
          <div>
            <h4>
              E-mail: <span className="font-normal text-lg">{user.email}</span>
            </h4>
            <h4>
              Telefono:{" "}
              <span className="font-normal text-lg">
                {user.phone_number || "-"}
              </span>
            </h4>
          </div>
          <PiGearBold size={30} className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
