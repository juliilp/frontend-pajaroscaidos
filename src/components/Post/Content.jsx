import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { convertirFecha } from "@/utils/auxfunctions";
import { CustomContext } from "@/store/ContextProvider";
import { IoIosTrash } from "react-icons/io";
import { deletePost } from "@/api/apiCall/PostRequests";
import Alerts from "../Alerts/Alerts";

export default function ContentPost({ publication, postId }) {
  const router = useRouter();
  const { title, createdAt, description, image, userId } = publication;
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();
  const [owner, setOwner] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setUser(UserContext);
    if (user) {
      setOwner(userId === user.id);
    }
  }, [UserContext, publication, user, userId]);

  const toggleAlert = () => {
    setAlert(!alert);
  };

  const handleDelete = async (confirm) => {
    if (confirm) {
      try {
        const response = await deletePost(postId);
        console.log(response);
        router.push("/foro");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      toggleAlert();
    }
  };

  return (
    <>
      {alert && (
        <Alerts
          title={"Confirmar"}
          textdetails={"¿Estas seguro de borrar la publicación?"}
          closemodal={toggleAlert}
          callback={handleDelete}
        />
      )}
      <article className="flex w-full justify-end">
        <span className="text-[#727272]">Fecha :</span>
        <span className="text-[#727272]">{convertirFecha(createdAt)}</span>
      </article>
      <article
        className={`w-full flex pl-3 items-center ${
          owner ? "justify-between" : "justify-start"
        }`}
      >
        <h1 className="font-semibold text-xl sm:text-2xl w-11/12">{title}</h1>
        {owner && (
          <button
            className="whitespace-nowrap text-red-600 font-medium"
            onClick={toggleAlert}
          >
            <IoIosTrash
              size={30}
              className="cursor-pointer fill-red-600 block sm:hidden"
            />
            <span className="text-red-600 font-medium hidden sm:block">
              Borrar publicación
            </span>
          </button>
        )}
      </article>
      <div
        className="w-full bg-[#c2c2c2] h-[0.7rem]  border-2 border-lightgray rounded-lg"
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))" }}
      />

      <article className=" w-full sm:w-11/12  md:w-10/12 ">
        <p className="text-[#020000] sm:text-sm  md:text-base xl:text-lg ">
          {description}
        </p>
      </article>

      {image[0].secure_url && (
        <article className="flex justify-center w-10/12">
          <div className="h-auto w-full flex items-center justify-center relative">
            <Image
              src={image[0].secure_url}
              alt={image[0].public_id}
              width={600}
              height={600}
              className=" rounded-lg"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </article>
      )}
    </>
  );
}
