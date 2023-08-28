"use client";
import CardForo from "@/components/CardForo";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { CiClock2, CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDoneAll } from "react-icons/md";
import { customContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter();
  const { user } = customContext();
  console.log(user);

  const [firstName, setFirstName] = useState(user && user.first_name);
  const [lastName, setLastName] = useState(user && user.last_name);
  const [nickName, setNickName] = useState(user && user.nick_name);
  const [birthDate, setBirthDate] = useState(user && user.birth_date);
  const [country, setCountry] = useState(user && user.country);
  const [city, setCity] = useState(user && user.city);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phone_number);
  const [description, setDescription] = useState(user && user.description);

  const handleUpdate = () => {
    const updateUser = {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      country: country,
      city: city,
      email: email,
      phone_number: phoneNumber,
      description: description,
    };

    axios
      .put(
        `https://pajaros-caidos-backend.onrender.com/user/update/${user.id}`,
        updateUser
      )
      .then((response) => {
        console.log("Usuario actualizado:", response.data);
      })
      .catch((error) => {
        console.log("Error al actualizar el usuario:", error);
      });
  };

  const shadow = { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" };
  return (
    <div className=" text-[#4F4F4F] bg-[#D9D9D9] min-h-screen  flex flex-col gap-5 pt-20 justify-center items-center">
      <main
        className="relative gap-2 p-5 pl-7 pr-7 w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] rounded-sm border font-semibold  flex flex-col border-[#C4C4C4] h-auto min-h-[10rem]"
        style={shadow}
      >
        <section className="w-full bg-red-100  h-[6rem]">
          <figure className="h-full rounded-full bg-blue-500 w-[6rem] text-center">
            {" "}
            {/* por aqui iria la foto de perfil*/}
            {(user && user.avatar === "-") || null ? (
              <BiSolidUser size={95} color="white" />
            ) : (
              <img
                src={user && user.avatar}
                alt="Avatar"
                className="h-full rounded-full bg-blue-500 w-[6rem] text-center"
              />
            )}
          </figure>
        </section>

        <section className="flex flex-col gap-1">
          <article className="flex gap-1">
            <span>
              <u>Nombre:</u>
            </span>
            <input
              type="text"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Apellido:</u>
            </span>
            <input
              type="text"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Nickname:</u>
            </span>
            <input
              type="text"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={nickName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Edad:</u>
            </span>
            <input
              type="date"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Pais:</u>
            </span>
            <input
              type="text"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Estado provincia:</u>
            </span>
            <input
              type="text"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </article>
        </section>

        <section className="flex flex-col gap-2 ">
          <h6 className=" border-b-2 border-white w-9/12">Contacto</h6>
          <article className="flex gap-1">
            <span>
              <u>Mail:</u>
            </span>
            <input
              type="email"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </article>

          <article className="flex gap-1">
            <span>
              <u>Telefono:</u>
            </span>
            <input
              type="tel"
              className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </article>
        </section>
        <MdOutlineDoneAll
          className="absolute right-3 bottom-2 text-4xl font-black text-lime-700 cursor-pointer"
          onClick={handleUpdate}
        />
      </main>

      <section
        className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] p-3 flex flex-col gap-2 border-[#C4C4C4]"
        style={shadow}
      >
        <h2 className="font-bold text-xl">
          <u>Sobre Mi</u>
        </h2>

        <article className="flex justify-center ">
          <textarea
            cols="75"
            rows="8"
            className="outline-none pl-2 bg-[#EEEEEE] rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </article>
      </section>
    </div>
  );
}
