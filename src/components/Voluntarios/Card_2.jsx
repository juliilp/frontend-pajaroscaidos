import Image from "next/image";
import React from "react";

export const Card_2 = ({ user }) => {
  const { name, description, photo } = user;

  return (
    <div>
      {/* <span>{name}</span> */}
      <Image src={photo} alt="voluntario" />
      {/* <p>{description}</p> */}
    </div>
  );
};
