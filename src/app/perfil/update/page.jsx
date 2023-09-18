"use client";
import api from "@/api/api";
import { useEffect, useState } from "react";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PerfilUpdateComponent from "@/components/PerfilUpdateComponent/PerfilUpdateComponent";

export default function Page() {
  const router = useRouter();
  const { UserContext } = CustomContext();
  console.log(UserContext);
  useEffect(() => {
    if (!UserContext) return router.push("/");
  }, [UserContext, router]);
  const [form, setForm] = useState({
    first_name: UserContext.first_name || "",
    country: UserContext.country || "",
    city: UserContext.city || "",
    contact: UserContext.contact || "",
    phone_number: UserContext.phone_number || 0,
  });

  const handlerForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlerFile = (e) => {
    setForm({
      ...form,
      avatar: { secure_url: e.target.files[0] },
    });
  };
  console.log(form);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    async function editUser() {
      const response = await api.put(`/user/update/${UserContext.id}`, form);
      console.log(response);
    }
    editUser();
    setForm({
      first_name: "",
      country: "",
      city: "",
      contact: "",
      phone_number: 0,
      avatar: {
        secure_url: "",
      },
    });
  };
  const ArrayForm = [
    {
      texto: "Nombre",
      name: "first_name",
      value: form.first_name,
      type: "text",
    },
    {
      texto: "Country",
      name: "country",
      value: form.country,
      type: "text",
    },
    {
      texto: "City",
      name: "city",
      value: form.city,
      type: "text",
    },
    {
      texto: "Contact",
      name: "contact",
      value: form.contact,
      type: "text",
    },
    {
      texto: "PhoneNumber",
      name: "phone_number",
      value: form.phone_number,
      type: "number",
    },
  ];
  return (
    <section className="pt-[100px]">
      <h2>Actualizar mis datos</h2>
      <form onSubmit={handlerSubmit}>
        <Image
          src={UserContext.avatar.secure_url}
          alt="imagen"
          width={75}
          height={75}
        />
        <input type="file" onChange={handlerFile} name="avatar" />
        {ArrayForm.map(({ texto, name, value, type, min, max }) => {
          return (
            <PerfilUpdateComponent
              key={name}
              name={name}
              texto={texto}
              value={value}
              type={type}
              min={min}
              max={max}
              onChange={handlerForm}
            />
          );
        })}
        <button type="submit">Actualizar datos</button>
      </form>
    </section>
  );
}
