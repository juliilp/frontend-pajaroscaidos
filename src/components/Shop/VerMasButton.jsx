import Link from "next/link";
export default function VerMasButton({ id }) {
  return (
    <Link
      href={`/galeria-solidaria/${id}`}
      className="text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white bg-green p-2 md:p-3 hover:text-gray-100 hover:bg-[#13b113] flex items-center justify-center "
    >
      ver más
    </Link>
  );
}
