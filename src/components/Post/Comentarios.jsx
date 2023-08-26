"use client";
import { convertirFecha } from "@/utils/auxfunctions";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiSolidUser } from "react-icons/bi";
import api from "@/api/api";
import {
  orderByAntiguos,
  orderByDestacados,
  orderByRecientes,
} from "@/helpers/orderComments";

export default function Comentarios({ comments }) {
  const [users, setUsers] = useState([]);
  const [orderComments, setOrderComments] = useState("Antiguos");
  const [sortedComments, setSortedComments] = useState(comments);

  useEffect(() => {
    async function fetchUsers() {
      const userIds = comments.map((comment) => comment.userId);
      const userRequests = userIds.map((id) => api.get(`user/${id}`));
      const userResponses = await Promise.all(userRequests);
      const usersData = userResponses.map((response) => response.data);
      setUsers(usersData);
    }

    fetchUsers();
  }, [comments]);

  const setComments = (event) => {
    const selectedOrder = event.target.id;
    setOrderComments(selectedOrder);

    let sortedCommentsCopy = [...comments];
    if (selectedOrder === "Recientes") {
      sortedCommentsCopy.sort(orderByRecientes);
    } else if (selectedOrder === "Destacados") {
      sortedCommentsCopy.sort(orderByDestacados);
    } else if (selectedOrder === "Antiguos") {
      sortedCommentsCopy.sort(orderByAntiguos);
    }

    setSortedComments(sortedCommentsCopy);
  };

  const commentMonth = (comment) => {
    const formattedDate = convertirFecha(comment);
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const month = formattedDate.slice(3, 5);
    const day = formattedDate.slice(0, 2);
    const year = formattedDate.slice(-4);

    return `${months[parseInt(month) - 1]}, ${day} ${year}`;
  };

  return (
    <div className="w-full  h-full text-lettersgray flex flex-col items-center gap-3">
      <section
        className="flex flex-col items-center w-full gap-4 sm:gap-0
            sm:flex-row  sm:items-stretch  sm:justify-between   sm:w-[95%] "
      >
        <article className="flex w-full sm:w-fit justify-start items-end sm:items-center min-h-[3rem] sm:min-h-[3rem]">
          <h3 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            Comentarios
          </h3>
        </article>

        <article
          className="flex items-center  min-h-[3rem] justify-between w-full min-w-fit max-w-full  
                text-xs  min-[370px]:text-lg  md:text-base lg:text-lg  xl:text-xl 2xl:text-2xl
                md:min-w-[20rem] sm:w-8/12 md:w-6/12 "
        >
          <h4
            id="Antiguos"
            onClick={setComments}
            className={`transition-all duration-150 w-full ${
              orderComments == "Antiguos" && "font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            ANTIGUOS
          </h4>
          <h4
            id="Recientes"
            onClick={setComments}
            className={`transition-all duration-150 w-full ${
              orderComments == "Recientes" && " font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            RECIENTES
          </h4>
          <h4
            id="Destacados"
            onClick={setComments}
            className={`transition-all duration-150 w-full ${
              orderComments == "Destacados" && " font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            DESTACADOS
          </h4>
        </article>
      </section>

      <div
        className={` w-full bg-[#c2c2c2] h-[0.3rem]  border-2 border-lightgray rounded-lg  `}
        style={{ filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      />

      {sortedComments.length ? (
        <div className=" w-[95%] flex flex-col gap-5 ">
          {sortedComments?.map((i, key) => (
            <section className="flex flex-col  gap-4 items-start" key={key}>
              <article className="flex gap-4">
                <figure className=" rounded-full bg-black h-[2rem] w-[2rem] overflow-hidden justify-center items-center">
                  {users[key]?.avatar ? (
                    <Image
                      src={users[key]?.user.avatar}
                      alt="Avatar"
                      width={50}
                      height={50}
                      layout="fixed"
                      className="rounded-full"
                    />
                  ) : (
                    <BiSolidUser
                      className="flex justify-center items-center w-full h-full"
                      color="white"
                    />
                  )}
                </figure>
                <div className="flex flex-col gap-1">
                  <h5 className=" text-xl font-medium">
                    {users[key]?.user.first_name} {users[key]?.user.last_name}
                  </h5>
                  <span className=" text-sm">{commentMonth(i.createdAt)}</span>
                </div>
              </article>

              <article
                title="comment"
                className=" font-semibold w-full sm:w-8/12"
              >
                <p className=" break-words">{i.comment}</p>
              </article>
              <div
                className={`  m-auto w-full sm:w-11/12 md:w-10/12 bg-[#c2c2c2] h-[0.1rem]  border-2 border-lightgray rounded-lg  `}
                style={{
                  filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.23))",
                }}
              />
            </section>
          ))}
        </div>
      ) : (
        <div>
          <h1>Sin comentarios</h1>
        </div>
      )}
    </div>
  );
}
