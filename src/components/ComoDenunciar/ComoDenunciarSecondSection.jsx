"use client";
import ContactoInfo from "./ContactoInfo";
import ProvinciasComoDenunciar from "./ProvinciasComoDenunciar";

export default function ComodenunciarSecondSection() {
  return (
    <>
      <div className="flex flex-col gap-8 w-full md:w-5/12">
        <article className="flex flex-col gap-8">
          <h1 className="text-[#0C6410] text-2xl ">
            FISCALIAS-DENUNCIAS ONLINE
          </h1>
          <p className="text-xl">
            En las siguientes paginas de internet encontrarás información sobre
            las fiscalías penales de las provincias. En algunas podras realizar
            la denuncia a traves de un formulario desde la pagina de internet y
            en otras deberas comunicarte para requerir mayores precisiones.
            Ciudad Autonoma de Buenos Aires Tel: 0800-333-347225 -
            denuncias@fiscalias.gob.ar Buenos Aires Catamarca: Chaco Chubut
            Córdoba Corrientes Entre Ríos Formosa Jujuy La Pampa La Rioja
          </p>
        </article>

        <section className="grid grid-cols-2 gap-6 text-lg">
          <article>
            {ProvinciasComoDenunciar.slice(0, 12).map((p, key) => (
              <a
                href={p.href}
                target="_blank"
                key={key}
                className="text-[blue] hover:text-gray-500 block"
              >
                {p.provincia}
              </a>
            ))}
          </article>
          <article>
            {ProvinciasComoDenunciar.slice(12).map((p, key) => (
              <a
                href={p.href}
                target="_blank"
                key={key}
                className="text-[blue] hover:text-gray-500 block "
              >
                {p.provincia}
              </a>
            ))}
          </article>
        </section>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-5/12">
        <h1 className="text-[#0C6410] text-2xl">
          DENUNCIA ANTE EL MUNICIPIO O AUTORIDAD PROVINCIAL / NACIONAL
        </h1>
        <p className="text-xl">
          En forma paralela a la formulación de la denuncia penal, se puede
          enviar copia de la misma a las Areas de Zoonosis de los municipios
          cuando se trate de maltrato o crueldad contra los animales, o bien
          ante las Direcciones Provinciales de Fauna o Ministerio de Ambiente y
          Desarrollo Sostenible de Nación, Policía Federal, Gendarmería Nacional
          o Prefectura Naval cuando se trate de tráfico ilegal de la fauna
          silvestre.
        </p>
        {ContactoInfo.map((item, index) => (
          <div key={index} className="text-xl">
            <b>
              <i>{item.title}</i>
            </b>
            {item.phone && (
              <>
                <br />
                Teléfono: {item.phone}
              </>
            )}
            {item.email && (
              <>
                <br />
                Correo electrónico:{" "}
                <a
                  className="text-[blue] hover:text-gray-500"
                  href={`mailto:${item.email}`}
                >
                  {item.email}
                </a>
              </>
            )}
            {item.emails &&
              item.emails.map((email, subIndex) => (
                <div key={subIndex}>
                  Correo electrónico:{" "}
                  <a
                    className="text-[blue] hover:text-gray-500"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
