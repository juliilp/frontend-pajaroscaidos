import Image from "next/image";
import Imagen1 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen1.webp";
import Imagen2 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen2.webp";
import Imagen3 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen3.webp";
import Imagen4 from "@/../public/images/ResponsabilidadSocialEmpresarial/imagen4.webp";
import banner from "@/../public/images/ResponsabilidadSocialEmpresarial/ResponsabilidadSocialEmpresarial.webp";
import dataEmpresas from "@/components/EmpresasParticipantesRCE/dataEmpresas";
import EmpresasParticipantesRCE from "@/components/EmpresasParticipantesRCE/EmpresasParticipantesRCE";

function ResponsabilidadSocialEmpresarial() {
  return (
    <section className=" mt-[70px] flex justify-center items-center w-full flex-col gap-8  md:px-0 ">
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>
      <h1 className="text-center font-semibold  text-2xl md:text-3xl text-[#0C6410] my-2  ">
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
      <article>
        <h1 className="text-center font-semibold  text-2xl md:text-3xl text-[#0C6410] my-8">
          Empresas que participan de responsabilidad social empresaria
        </h1>
        <div className="flex gap-10 flex-col px-6 md:flex-wrap md:flex-row justify-center items-center mb-8">
          {dataEmpresas.map(({ titulo, imagen, texto }, key) => {
            return (
              <EmpresasParticipantesRCE
                key={key}
                titulo={titulo}
                imagen={imagen}
                texto={texto}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default ResponsabilidadSocialEmpresarial;
