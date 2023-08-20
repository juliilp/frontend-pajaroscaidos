import Image from "next/image";

export default function ComodenunciarSecondSection({image1,image2}) {
  return (
    <>
      <div className="flex flex-col gap-8 w-5/12">
        <article>
          <h1>FISCALIAS-DENUNCIAS ONLINE</h1>
          <p>
            FISCALIAS - DENUNCIAS ON LINE En las siguientes paginas de internet
            encontrarás información sobre las fiscalías penales de las
            provincias. En algunas podras realizar la denuncia a traves de un
            formulario desde la pagina de internet y en otras deberas
            comunicarte para requerir mayores precisiones. Ciudad Autonoma de
            Buenos Aires Tel: 0800-333-347225 - denuncias@fiscalias.gob.ar
            Buenos Aires Catamarca: Chaco Chubut Córdoba Corrientes Entre Ríos
            Formosa Jujuy La Pampa La Rioja
          </p>
        </article>

        <article className="underline flex  justify-between">
          <div className="flex flex-col ">
            <span>
              <a href="">Buenos Aires</a>
            </span>
            <span>
              <a href="">Catamarca</a>
            </span>
            <span>
              <a href="">Chaco</a>
            </span>
            <span>
              <a href="">Chubut</a>
            </span>
            <span>
              <a href="">Córdoba</a>
            </span>
            <span>
              <a href="">Corrientes</a>
            </span>
            <span>
              <a href="">Entre Rios</a>
            </span>
            <span>
              <a href="">Formosa</a>
            </span>
            <span>
              <a href="">Jujuy</a>
            </span>
            <span>
              <a href="">La Pampa</a>
            </span>
            <span>
              <a href="">La rioja</a>
            </span>
           
          </div>

          <div className="flex flex-col">
            <span>
              <a href="">Mendoza</a>
            </span>
            <span>
              <a href="">Misiones</a>
            </span>
            <span>
              <a href="">Neuquén</a>
            </span>
            <span>
              <a href="">Rio Negro</a>
            </span>
            <span>
              <a href="">Salta</a>
            </span>
            <span>
              <a href="">San Juan</a>
            </span>
            <span>
              <a href="">San Luis</a>
            </span>
            <span>
              <a href="">Santa Cruz</a>
            </span>
            <span>
              <a href="">Santa Fe</a>
            </span>
            <span>
              <a href="">Santiago del Estero</a>
            </span>
            <span>
              <a href="">Tierra del fuego</a>
            </span>
            <span>
              <a href="">Tucumán</a>
            </span>
          </div>
        </article>

        <article>
          <Image src={image1} alt="P-caidosimg"/>
        </article>
      </div>

      <div className="flex flex-col gap-8 w-5/12">
        <h1>DENUNCIA ANTE EL MUNICIPIO O AUTORIDAD PROVINCIAL / NACIONAL </h1>
        <p>
          En forma paralela a la formulación de la denuncia penal, se puede
          enviar copia de la misma a las Areas de Zoonosis de los municipios
          cuando se trate de maltrato o crueldad contra los animales, o bien
          ante las Direcciones Provinciales de Fauna o Ministerio de Ambiente y
          Desarrollo Sostenible de Nación, Policía Federal, Gendarmería Nacional
          o Prefectura Naval cuando se trate de tráfico ilegal de la fauna
          silvestre. Ministerio de Ambiente y Desarrollo Sostenible (Dirección
          de Fauna Silvestre) faunayfloradenuncia@ambiente.gob.ar Unidad Fiscal
          de Investigaciones en Materia Ambiental (UFIMA) Teléfono: (011)
          4342-9886 / 4342-9887 Correo eléctronico: ufima@mpf.gov.ar Policía
          Federal Teléfono: (011) 4370-5876 ó 4370-5811 Correos electronicos:
          dto.unifed.ambientales@policiafederal.gov.ar
          delitoambiental@yahoo.com.ar dto.unifed.ambientales@gmail.com
          denunciasdelitosfederales@policiafederal.gov.ar Gendarmería Nacional
          Teléfono: 0800-888-8804 Correo electrónico:
          0800denuncias@gendarmeria.gob.ar Prefectura Naval Argentina Telefono:
          (011) 4576-7658 ó 106
        </p>
        <article>
        <Image src={image2} alt="P-caidosimg"/>
        </article>
      </div>
    </>
  );
}
