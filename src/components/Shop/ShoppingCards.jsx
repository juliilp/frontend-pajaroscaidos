import ContactUsButton from "./ContactUsbutton";

export default function ShoppingCards({ title, image, detail, redirect }) {
    return (
        <div className="   border-[0.1px] border-[#80808000] border-b-0 shadow-2xl m-auto flex flex-col  justify-between
        w-[13rem]
        min-[350px]:w-[11rem]
        min-[400px]:w-[12rem]
        min-[450px]:w-[13.5rem]
        min-[500px]:w-[14rem]
        sm:w-[14rem]
        md:w-[14rem]
        lg:w-[18rem]
        xl:w-[19rem] min-h-[24rem]  ">

            <section className="h-[8rem] w-full bg-blue-400 ">

            </section>

            <h5 className=" text-base text-center md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">{title}</h5>
            <article className="w-[95%] p-2 text-left ">
                <p className=" break-words p-1 text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">{detail}</p>
            </article>

            <ContactUsButton />

        </div>
    )
}