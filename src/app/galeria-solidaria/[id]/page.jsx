import ContactUsButton from "@/components/Shop/ContactUsbutton";
import ShoppingCards from "@/components/Shop/ShoppingCards";

export default function page({ params }) {
  const { id } = params;
  const faketotal = "123".split("");
  return (
    <div className=" min-h-screen text-white flex flex-col items-center justify-center gap-9 pt-24 pb-5">
      <h1 className="text-[#756F70] font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        DETALLE DEL PRODUCTO: {id}
      </h1>

      <section className="w-10/12 flex justify-center md:justify-end">
        <button className="text-white bg-green p-2 w-[8rem] md:p-3 hover:text-gray-100 hover:bg-[#13b113]">
          Donar
        </button>
      </section>

      <main className="flex flex-col items-center gap-6 md:gap-0 md:flex-row md:items-start justify-between w-[95%] text-black">
        <section className="flex items-start justify-center w-full md:w-5/12">
          <div className="h-[25rem] w-[25rem] bg-yellow-200"></div>
        </section>

        <section className="flex flex-col w-[300px]:w-11/12 min-[450px]:w-10/12 sm:w-9/12 md:w-6/12 gap-10">
          <article className="flex justify-center w-full md:justify-start">
            <h2 className="text-[#128117] font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              TITULO DEL PRODUCTO
            </h2>
          </article>

          <article>
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum{" "}
            </p>
          </article>

          <article className="flex flex-col gap-3">
            <span>tallas disponibles : XS,S,M,L </span>
            <span>colores disponibles :negro ,blanco</span>
          </article>

          <article className="w-full flex justify-center">
            <ContactUsButton />
          </article>
        </section>
      </main>

      <section className="flex w-[95%] flex-col gap-3 ">
        <article className=" p-4 w-full flex justify-center md:justify-start">
          <h3 className="font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#756F70]">
            PRODUCTOS QUE TE PUEDEN INTERESAR
          </h3>
        </article>

        <article className="flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center">
          {faketotal.map((key) => (
            <ShoppingCards key={key} />
          ))}
        </article>
      </section>
    </div>
  );
}
