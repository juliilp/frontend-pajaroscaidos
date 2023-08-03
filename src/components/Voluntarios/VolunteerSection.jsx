import api from "@/api/api";
import { Card } from "./Card";

export const VolunteerSection = async () => {
  const { props } = await getStaticProps();
  const users = props.user;

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 mb-40 grid grid-cols-3 gap-12 items-center p-2 ">
        {users.map(({ id, first_name, avatar, description }) => (
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
