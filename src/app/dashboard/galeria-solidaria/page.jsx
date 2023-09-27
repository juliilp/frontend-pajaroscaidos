"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ItemModal from "@/components/Dashboard/OpcionesInicio/galeria-solidaria/ItemModal";
import { getItemsShop } from '@/api/apiCall/functions';

function page() {
  const [data, setData] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalType, setModalType] = useState('')
  const [image, setImage] = useState('')
  const [itemToEdit, setItemToEdit] = useState({})

  useEffect(() => {
    const action = async () => {
      try {
        const data = await getItemsShop();
        setData(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    action();
  }, [])
  const openCreateModal = () => {
    setItemToEdit(null)
    setModalType('create');
    setVisibleModal(true)
  }
  const openEditModal = (event, data) => {
    event.preventDefault()

    const itemprops = {
      id:data.id,
      image: data.image[0].secure_url,
      title: data.title,
      description: data.description,
      categories: [data.categories[0]?.name],
      category: [data.categories[0]?.name]
    }
    setItemToEdit(itemprops)
    setModalType('edit');
    setVisibleModal(true)
  }
  const closeModal = () => {
    setVisibleModal(false)
  }

  return (
    <div className=" text-sm md:text-sm  lg:text-base xl:text-lg 2xl:text-xl 
     min-h-screen w-full flex flex-col justify-center items-center gap-6 pt-[90px] pb-10">
      {visibleModal && <ItemModal closeModal={closeModal} ModalType={modalType} itemToEdit={itemToEdit} />}
      <section>
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Galeria Solidaria</h1>
      </section>
      <section className="  bg-[#4F4F4F] w-[95%] min-h-[20rem] flex flex-col gap-4   p-6 pb-0 pt-12 rounded-lg">

        <div className="grid gap-2  max-w-[40rem] m-auto grid-flow-row grid-rows-3 grid-cols-2
         md:grid-cols-3 md:grid-rows-2 md:max-w-[60rem]
        ">
          {data?.items?.map((i, key) =>
            <article key={key} className=" flex p-2 flex-col items-center justify-center gap-2  rounded-lg bg-[#C2C2C2] min-h[18rem] md:min-h-[22rem] md:h-auto" onClick={(event) => openEditModal(event, i)} >
              <article className="h-[48%] ">
                {i.image[0].secure_url &&
                  <Image width={100} height={100} src={i.image[0].secure_url} alt={`product ${key}`}
                    className="w-auto  min-h-[9rem] max-h-[11rem]   h-[10rem]" />
                }
              </article>
              <h3 className=" text-base md:text-xl xl:text-2xl 2xl:text-3xl">{i.title ?? 'Titulo no disponible'}</h3>
              <article className="flex flex-col justify-between h-[52%]">
                <p className="leading-none text-center">{i.description ?? 'Descripcion no disponible'}</p>
                <span className="">tallas disponibles:{i.categories[0]?.name}</span>
              </article>
            </article>
          )}
        </div>

        <div className="flex justify-center  w-full items-center">

          <article className='flex justify-end w-6/12'>
            <h1>Paginado</h1>
          </article>

          <article className=' flex justify-end w-6/12'>
            <button onClick={openCreateModal} className=' p-4 bg-green'>Añadir item +</button>
          </article>
        </div>
      </section>
    </div>
  );
}
export default page;
