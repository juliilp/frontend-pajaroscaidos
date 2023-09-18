import YouTube from "react-youtube";
export default function Section2Caza_Trafico() {
  const videoID = "ZUFlRWmiVKM";
  return (
    <>
      <article className="flex flex-col w-[95%] md:w-[48%] gap-8">
        <h2>
          Historias de Rescates. GEGE, El Tucán que pudo volver a la selva.
        </h2>
        <p>
          En diciembre de 2018, la Asociación Civil de Ayuda a las Aves Pájaros
          Caídos recibió un pichón de tucán que habia sido comercializado
          ilegalmente y su comprador arrepentido lo entregó para ser devuelto a
          la naturaleza. La Asociación puso en marcha un operativo que que
          recorrió por tierra mas de 1300 kilómetros para devolver a la selva el
          pichón de tucán que había sido comprado en la Ciudad de Buenos Aires,
          víctima del tráfico ilegal de fauna.
        </p>
      </article>

      <article className="w-full h-[18rem] md:w-6/12 md:h-[20rem]">
        <YouTube
          videoId={videoID}
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {},
          }}
          className="w-full h-full"
        />
      </article>
    </>
  );
}
