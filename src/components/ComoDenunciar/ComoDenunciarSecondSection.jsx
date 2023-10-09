"use client";
import ProvinciasComoDenunciar from "./ProvinciasComoDenunciar";

export default function ComodenunciarSecondSection() {
  console.log(ProvinciasComoDenunciar);
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

        <article className="flex flex-col gap-6">
          {ProvinciasComoDenunciar.map((p, key) => {
            return (
              <a href={p.href} target="_blank" key={key}>
                {p.provincia}
              </a>
            );
          })}
        </article>
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

        <p className="text-xl">
          <b>
            <i>
              Ministerio de Ambiente y Desarrollo Sostenible (Dirección de Fauna
              Silvestre)
            </i>
          </b>
          :
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:faunayfloradenuncia@ambiente.gob.ar"
          >
            faunayfloradenuncia@ambiente.gob.ar
          </a>
        </p>

        <p className="text-xl">
          <b>
            <i>Unidad Fiscal de Investigaciones en Materia Ambiental (UFIMA)</i>
          </b>
          <br />
          Teléfono: (011) 4342-9886 / 4342-9887 <br />
          Correo eléctronico:{" "}
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:ufima@mpf.gov.ar"
          >
            ufima@mpf.gov.ar
          </a>
        </p>
        <p className="text-xl">
          <b>
            <i>Policía Federal</i>
          </b>
          <br />
          Teléfono: (011) 4370-5876 ó 4370-5811 <br />
          Correos electronicos:
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:dto.unifed.ambientales@policiafederal.gov.ar"
          >
            {" "}
            dto.unifed.ambientales@policiafederal.gov.ar
          </a>
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:delitoambiental@yahoo.com.ar"
          >
            {" "}
            delitoambiental@yahoo.com.ar{" "}
          </a>
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:dto.unifed.ambientales@gmail.com"
          >
            {" "}
            dto.unifed.ambientales@gmail.com{" "}
          </a>
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:denunciasdelitosfederales@policiafederal.gov.ar"
          >
            {" "}
            denunciasdelitosfederales@policiafederal.gov.ar{" "}
          </a>
        </p>

        <p className="text-xl">
          <i>
            <b>Gendarmería Nacional</b>
          </i>
          <br />
          Teléfono: 0800-888-8804 <br />
          Correo electrónico: <br />{" "}
          <a
            className="text-[blue]  hover:text-gray-500"
            href="mailto:0800denuncias@gendarmeria.gob.ar"
          >
            0800denuncias@gendarmeria.gob.ar
          </a>{" "}
          .
        </p>

        <p className="text-xl">
          <b>
            <i>Prefectura Naval Argentina</i>
          </b>
          <br />
          Telefono: (011) 4576-7658 ó 106
        </p>
      </div>
    </>
  );
}
