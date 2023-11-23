"use client";

import { getUsersDevelopers } from "@/api/apiCall/UserRequests";
import CardDev from "@/components/Developers/CardDev";
import { useEffect, useState } from "react";

const Developers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const call = async () => {
      const response = await getUsersDevelopers();
      setUsers(response.users.users);
    };
    call();
  }, []);

  if (!users || !users[0]) {
    return <p>loading..</p>;
  }

  return (
    <div className="pt-5 mt-16">
      <h1 className="flex justify-center text-3xl font-bold mb-4 col-span-2">
        Desarrolladores De Pajaros Caidos ONG
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 justify-center items-center">
        {users.map((dev) => (
          <div key={dev.id} className="flex justify-center">
            <CardDev
              image={dev.avatar?.secure_url}
              title={`${dev.first_name} ${dev.last_name}`}
              description={dev.description ? dev.description : "No hay descripción"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
