export default function ShoppingCards({ title, image, detail, redirect }) {
    return (
        <div
            className=" shadow-xl text-[#231F20] font-bold flex m-auto  h-auto   min-h-[18rem]  items-center flex-col gap-5 border-lightgray border   
             w-9/12   
            min-[350px]:w-[95%]
            min-[400px]:w-11/12   min-[400px]:border-2 
            sm:w-3/12   
            sm:min-w-[20rem]
            2xl:min-w-[20.5rem]
          ">

            <section className="h-[8rem] w-full bg-blue-600 ">

            </section>

            <h5 className=" text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{title}</h5>
            <article className="w-[95%] ">
                <p className=" break-words p-1 text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{detail}</p>
            </article>

            <button className=" text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  text-white bg-green p-2 md:p-3 hover:text-gray-100 hover:bg-[#13b113]">
                Contáctanos
            </button>

        </div>
    )
}