import Image from "next/image";
import Imagen1 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen1.png";
import Imagen2 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen2.png";
import Imagen3 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen3.png";
import Imagen4 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen4.png";
import bgimage from "@/../public/images/ResponsabilidadSocialEmpresarial/ResponsabilidadSocialEmpresarial.png";

function ResponsabilidadSocialEmpresarial() {
  return (
    <section className=" mt-[70px] flex justify-center items-center w-full flex-col gap-8  md:px-0 ">
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[24rem]">
        <Image src={bgimage} alt="bg-tucan" fill className="w-full " />
      </section>
      <h1 className="text-center font-semibold  text-2xl text-[#0C6410] my-8 ">
        RESPONSABILIDAD SOCIAL EMPRESARIAL{" "}
      </h1>
      <p className="px-6 font-semibold">
        La conciencia social y empresarial convergen en una sinergia fundamental
        para la protección y conservación de las aves y su entorno natural. La
        conciencia social abarca una comprensión profunda y una empatía
        arraigada hacia el entorno en el que vivimos y las criaturas que lo
        habitan. En el contexto de las aves, esto significa estar informados
        sobre su papel vital en los ecosistemas, comprender cómo nuestras
        acciones cotidianas pueden afectarlas y reconocer la necesidad de
        esforzarse por su preservación.
        <br />
        <br /> Esta conciencia social va más allá de la mera comprensión;
        implica actuar. Al entender la importancia de la biodiversidad y los
        ecosistemas, la sociedad está más inclinada a tomar decisiones
        informadas y responsables que protejan a las aves y su hábitat. La
        educación y sensibilización son pilares esenciales de esta conciencia,
        ya que permiten que la comunidad se involucre activamente en iniciativas
        de conservación, desde la protección de espacios naturales hasta la
        adopción de prácticas sostenibles en la vida cotidiana.
        <br />
        <br /> Además, esta conciencia social moviliza a la comunidad para
        abogar por políticas más ecológicas y sostenibles por parte de los
        gobiernos y las empresas. Es un motor de cambio que puede influir en la
        formulación de leyes y regulaciones que protejan a las aves y su
        hábitat, asegurando un futuro más próspero y equilibrado entre la
        naturaleza y la sociedad.
        <br />
        <br /> En paralelo, la responsabilidad empresarial desempeña un papel
        igualmente crucial. Las empresas, como agentes importantes en la
        sociedad, deben reconocer su papel en la conservación del medio ambiente
        y la vida silvestre. Esto va más allá de las ganancias económicas y se
        centra en prácticas sostenibles que reduzcan su impacto en el entorno.
        Desde la gestión de residuos hasta la reducción de emisiones de carbono
        y la protección de hábitats, las empresas pueden tomar medidas
        significativas para preservar el entorno y, por ende, las poblaciones de
        aves que dependen de estos ecosistemas.
        <br />
        <br /> Asimismo, las empresas pueden invertir en proyectos de
        conservación de aves, contribuyendo financieramente y brindando apoyo a
        organizaciones que se dedican a la protección de la vida silvestre. La
        colaboración con ONG y gobiernos también es crucial para maximizar los
        esfuerzos en la conservación y restauración de hábitats.
        <br />
        <br /> En resumen, la conciencia social y empresarial se entrelazan en
        la preservación de las aves y su hábitat. La educación y movilización de
        la sociedad junto con la responsabilidad de las empresas pueden marcar
        una diferencia significativa en la conservación de las aves y la
        biodiversidad en general. Es un esfuerzo colaborativo y necesario para
        garantizar un futuro en el que las aves puedan prosperar en armonía con
        su entorno natural y la actividad humana.
      </p>

      <div className="flex flex-wrap w-full justify-center items-center gap-6 lg:gap-12 my-6 ">
        <Image
          src={Imagen4}
          alt="imagen1"
          className="w-full h-auto lg:max-w-[1257px] md:max-w-[800px] sm:max-w-full object-cover"
        />
      </div>
      <div className="flex  flex-wrap w-full justify-center items-center gap-6 lg:gap-12 my-6">
        <Image
          src={Imagen1}
          alt="imagen1"
          className="w-full max-w-[414px] h-[701px]"
        />
        <Image
          src={Imagen2}
          alt="imagen2"
          className="w-full max-w-[414px] h-[701px]"
        />
        <Image
          src={Imagen3}
          alt="imagen3"
          className="w-full max-w-[414px] h-[701px]"
        />
      </div>
    </section>
  );
}

export default ResponsabilidadSocialEmpresarial;
