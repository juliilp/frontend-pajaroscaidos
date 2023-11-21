import banner from "@/../public/images/Crueldad-maltrato/crueldad-maltrato.webp";
import Image from "next/image";
import TarjetaCrueldadMaltrato from "../../components/CrueldadMaltrato/Tarjetas";
import TituloCrueldadMaltrato from "../../components/CrueldadMaltrato/TituloCrueldadMaltrato";

export default function page() {
  return (
    <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>

      <section className="lg:mx-20">
        <TituloCrueldadMaltrato />
      </section>
      <section>
        <TarjetaCrueldadMaltrato />
      </section>
    </div>
  );
}
