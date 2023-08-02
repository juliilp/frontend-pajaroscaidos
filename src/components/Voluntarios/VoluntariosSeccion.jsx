import { Card } from "./Card";
import photo from "../../../public/images/fotos.svg";
import { Card_2 } from "./Card_2";

const voluntario = {
  name: "Any",
  photo,
  description:
    "Soy una persona apasionada y deversa en mis intereses. Me encanta dedicar mi tiempo libre a salvar aves heridas, brindándoles cuidado y protección. También soy programador, y la creatividad que me brinda la programación complementa mi amor por la naturaleza y me ayuda a encontrar soluciones innovadoras en ambos ámbitos.",
};

const numOfUsers = [1, 2, 3, 4];
const numOfUsers_2 = [1, 2, 3];

export const VoluntariosSeccion = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 p-3 grid grid-cols-2 gap-4 ">
        {numOfUsers.map((id) => (
          <Card key={id} user={voluntario} />
        ))}
      </div>
      <hr />
      <div className="mt-5 grid grid-cols-3 gap-12 items-center p-2 ">
        {numOfUsers_2.map((id) => (
          <Card_2 key={id} user={voluntario} />
        ))}
      </div>
    </div>
  );
};
