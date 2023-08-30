import EncontreUnAve from "@/components/EncontreUnAve/EncontreUnAve";
import React from "react";
import Imagen1 from "@/../public/images/encontreunave/imagen1.png";
import Imagen2 from "@/../public/images/encontreunave/imagen2.png";
import Imagen3 from "@/../public/images/encontreunave/imagen3.png";
export default function page() {
  return (
    <section className="mt-[70px] flex flex-col w-full gap-8">
      <h1 className="text-xl text-[#0C6410] text-center font-semibold mt-8 ">
        QUE HACER SI ME ENCUENTRO UN AVE
      </h1>
      <p className="px-8 max-w-[800px] font-semibold mx-auto">
        Encontrar un ave herida, enferma o un pichón caído del nido sin poder
        volar es muy común en zonas urbanas y también rurales. Solo basta con
        prestar atención y observar. Comprometerse y rescatarla de una segura
        muerte es un paso muy importante que enfrentan día a día muchas personas
        que sin conocer nada sobre aves, asumen ese desafio de cuidarlas y
        darles una nueva oportunidad en la vida. Desde esta pñagina queremos
        ayudarte a enfrentar ese desafio para que tu esfuerzo tenga la mejor
        recompensa que es salvar una vida.
      </p>
      <div className="w-full flex flex-col justify-center items-center gap-16 py-12">
        <EncontreUnAve
          imagen={Imagen1}
          titulo="ENCONTRE UN AVE. QUE HAGO"
          parrafo={
            "Lo más importante cuando encontramos un ave en esta situación de peligro porque está herida, enferma o no puede volar es ponerla a resguardo.\n" +
            "Para ello se debe agarrarla con el mayor de los cuidados, y tratar de colocarla en una caja donde pueda ser transportada, cuidando que la misma tenga suficiente luz y ventilación para que el ave no se sienta encerrada y pueda respirar.\n" +
            'Luego de llevarla a un lugar seguro, con mucho cuidado se debe verificar si está herida por presentar alguna lesión visible, o si su problema es otro. En caso de estar herida es recomendable desinfectar la zona con pervinox y vendar. En cualquier caso puedes hacer la consulta en el grupo de FACEBOOK "Consultas Refugio de Aves Pájaros Caídos" para que te indiquen los pasos a seguir en forma URGENTE o recurrir a un veterinario.\n' +
            "El ave debe ser resguardada en una jaula o caja de cartón fuera del alcance de otros animales como perros y gatos, no se debe dejar a la intemperie y menos bajo el sol, debiendo en este último caso, colocar en su parte superior algún elemento que permita pasar la luz y el aire si el ave puede escaparse. Es importante colocar agua y semillas según la especie que se trate."
          }
        />
        <EncontreUnAve
          imagen={Imagen2}
          titulo="CONSULTA ON LINE CON EL REGUGIO DE AVES PAJAROS CAIDOS"
          parrafo="El Refugio de Aves Pájaros Caídos es una Grupo de Facebook donde puedes hacer tu consulta, enviando una foto y describiendo el tipo de ave que has rescatado. Alli deberás informar el estado en que se encuentra y un grupo de voluntarios especializados te indicarán cuales son los primeros auxilios y cuidados de emergencia que debes adoptar, o bien indicarte si requiere atención veterinaria urgente.
        Desde el grupo de Facebook Consultas Refugio de Aves Pájaros Caidos te indicarán como alimentarlas, cuidarlas o bien reinsertarlas en su hábitat natural. Es un servicio gratuito.
        .
        MUY IMPORTANTE: Para realizar la consulta sobre aves, o recibir asistencia en casos de URGENCIA, accede al enlace que tenes a continuación y escribí tu pregunta, que te responderemos a la mayor brevedad posible."
        />
        <EncontreUnAve
          imagen={Imagen3}
          blog={true}
          titulo="APRENDER COMO CUIDAR UN AVE. BLOG DE PAJAROS CAIDOS"
          parrafo="En el Blog de Pájaros Caídos podrás encontar información de importancia como tutoriales, videos y explicaciones de como cuidar mejor a las aves, desde alimentar un pichón a dieta que debe `proporcionarsele, asi como primeros auxilios, enfermedades comunes, entre otras cosas.
        Cualquier duda que tengas luego de visitar el Blog, podrás consularla en el Grupo de Facebook del Refugio de Aves Pájaros Caidos.
        "
        />
        <EncontreUnAve
          video={true}
          titulo="COMO ALIMENTAR UN PICHON DE PALOMACOMO ALIMENTAR UN PICHON DE PALOMA"
          parrafo="Este video les va a dar un ayuda para alimentar un pichon de paloma de froma ilustratiba"
        />
      </div>
    </section>
  );
}
