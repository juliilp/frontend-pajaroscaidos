import { BiLoaderAlt } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-4">
      <BiLoaderAlt className="animate-spin" size={35} color="#0C6410" />
      <h1 className="text-2xl text-[#0C6410] text-center font-semibold">
        Cargando...
      </h1>
    </div>
  );
}
