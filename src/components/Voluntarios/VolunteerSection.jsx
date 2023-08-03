import api from "@/api/api";
import photo from "../../../public/images/fotos.svg";
import { Card } from "./Card";

const voluntario = {
  name: "Any",
  photo,
  description:
    "Soy una persona apasionada y deversa en mis intereses. Me encanta dedicar mi tiempo libre a salvar aves heridas, brindándoles cuidado y protección. También soy programador, y la creatividad que me brinda la programación complementa mi amor por la naturaleza y me ayuda a encontrar soluciones innovadoras en ambos ámbitos.",
};

const numOfUsers = [1, 2, 3, 4];
const numOfUsers_2 = [1, 2, 3];

export const VolunteerSection = async () => {
  const { props } = await getStaticProps();
  const arregloUsers = props.user;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 mb-10 grid grid-cols-3 gap-12 items-center p-2 ">
        {arregloUsers.map(({ id, first_name, avatar, description }) => (
          <Card
            key={id}
            name={first_name}
            avatar={avatar}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const { data } = await api.get("/user/all");
  return {
    props: {
      user: data.users,
    },
  };
};
