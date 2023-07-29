import Image from "next/image";

export const Card = ({ user }) => {
  const { description, photo } = user;
  return (
    <div className="flex w-169 h-42 rounded-lg shadow-xl p-4">
      {/* <span className="float float-left">{name}</span> */}
      <Image src={photo} alt="voluntario" width={80} height={32} />
      <p className=" text-sm font-roboto text-justify p-2">{description}</p>
    </div>
  );
};
