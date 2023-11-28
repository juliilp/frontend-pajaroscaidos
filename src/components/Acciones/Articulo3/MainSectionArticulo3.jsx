import Image from "next/image";

export default function MainSectionArticulo1({ image }) {
  return (
    <>
      <article className=" px-4 w-11/12 md:p-0 md:w-6/12">
        <p className=" break-words">
          Con tan solo tres semanas de vida, Gegé corrió la suerte que muchos
          animales salvajes padecen en manos de los humanos. Cazado en la selva
          misionera, su corta edad no impidió que fuera traficado ilegalmente a
          la gran ciudad y allí, ofrecido por dinero al mejor postor. Se publicó
          en un grupo de venta en internet y, por el valor de $ 5 mil, alguien
          lo compró. Afortunadamente, la cadena de maltrato terminó ahí: porque
          ese alguien se lo regaló a una persona que comprendió que la vida de
          Gegé debía regresar a su hábitat, de donde nunca debería haber salido.
          Inmediatamente la persona que estaba destinada a cambiar el camino de
          Gegé se puso en contacto con la Asociación Civil de Ayuda a las Aves
          Pájaros Caídos y allí le prometieron que iban a llevar al tucán de
          regreso a casa. Así comenzó un largo camino para el ave, cuya especie
          está próxima a entrar en la categoría de ave en peligro. &quot;Peligro
          es la antesala de su extinción si no frenamos su caza, la destrucción
          de su hábitat y la manía humana de tenerlos en cautiverio. Los tucanes
          viven un promedio de 20 años en libertad, pero en cautiverio su vida
          se reduce a unos cinco años en el mejor de los casos. El encierro y
          las carencias nutricionales se cobran un precio caro&quot;, asegura
          Clara Correa, presidenta y fundadora de la Asociación Civil Pájaros
          Caídos, una ONG que se dedican a proteger, rescatar, rehabilitar y
          reinsertar todo tipo de aves. El bebé de tucán fue atendido por la
          veterinaria especializada en aves, Dra. Rosana Mattiello, quien
          constató que tenía coccidios, mucha cantidad de coccidios. &quot;Si no
          lo hubiéramos llevado al veterinario, se hubiera muerto por los
          parásitos. Cuando son cazadas, las aves entran en un estado de estrés
          extremo, ello ocasiona que le bajen las defensas y en muchos casos,
          por no tener posibilidades de ser atendidas correctamente,
          mueren&quot;, explica Clara. Gegé comenzó su tratamiento para
          coccidios y una meticulosa dieta para fortalecerlo, ya que su extenso
          pico en formación estaba tan débil que corría el riesgo de quebrarse.
          Mientras, en el refugio que la Asociación tiene en Tigre, Gegé pasaba
          sus dias a la espera de su traslado, llorando. &quot;Mucha gente cree
          que el sonido que emiten los tucanes es de canto. No es así, es de
          llanto. Gegé lloraba, y lloraba. Extrañaba su hogar y a sus
          compañeros. Estuvo con nosotros 15 días que se sintieron eternos.
          Primaba la urgencia de comenzar su reinserción para poder regresarlo a
          su hábitat. Afortunadamente, gracias a la ayuda financiera de María
          Silvia, Martín y Leonel pudimos emprender el regreso a su hábitat y
          llevarlo al Refugio Güirá Oga, en Iguazú, Misiones&quot;, explica
          Correa. Allí se lo iba a terminar de criar, alimentar y enseñar lo que
          necesitaba aprender para poder vivir en la vida silvestre. Hoy Gegé se
          encuentra en plena recuperación. Desde Pájaros Caídos, además, están
          trabajando en la confección de un Programa de Reinserción de Tucanes
          para poder próximamente presentar a Fauna Silvestre. El programa se
          llama &quot;Regresá Al tucán a la selva&quot; y tiene el objetivo de
          luchar por los miles que viven en cautivierio y son comercializados.
          Texto Diario La Nacion, por Jimena Barrionuevo <br />
          <a
            className=" text-blue-600 hover:text-blue-300"
            href="https://www.lanacion.com.ar/lifestyle/gege-tucan-victima-del-trafico-fauna-lloro-nid2236543"
          >
            https://www.lanacion.com.ar/lifestyle/gege-tucan-victima-del-trafico-fauna-lloro-nid2236543
          </a>
        </p>
      </article>

      <article className="w-6/12 hidden md:block">
        <Image
          src={image}
          alt="Bg-article-1"
          className="m-auto w-8/12 h-auto max-h-[625px]"
          quality={100}
        />
      </article>
    </>
  );
}
