"use client"
import fakeitems from './fakeitems.json'
import React, { useState } from "react";
import Image from "next/image";
import ItemModal from "@/components/Dashboard/OpcionesInicio/galeria-solidaria/ItemModal";

function page() {

  const [visibleModal, setVisibleModal] = useState(false);
  const [modalType, setModalType] = useState('')
  const [image, setImage] = useState('')
  const [itemToEdit, setItemToEdit] = useState({})

  const openCreateModal = () => {
    setItemToEdit(null)
    setModalType('create');
    setVisibleModal(true)
  }
  const openEditModal = (event, data) => {
    event.preventDefault()
    
    const itemprops={
      image:data.image[0].secure_url,
      title:data.title,
      description:data.description,
      categories:[data.categories[0]?.name]
    }
    setItemToEdit(itemprops)
    setModalType('edit');
    setVisibleModal(true)
  }
  const closeModal = () => {
    setVisibleModal(false)
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-6 mt-[60px] pb-10">
      {visibleModal && <ItemModal closeModal={closeModal} ModalType={modalType} itemToEdit={itemToEdit} />}
      <section>
        <h1>Galeria Solidarias</h1>
      </section>
      <section className="  bg-[#4F4F4F] w-[95%] min-h-[20rem]   p-6 pb-0 pt-12 rounded-lg">
        <div className="grid grid-flow-row grid-rows-2 grid-cols-3 gap-2 md:max-w-[60rem] max-w-[40rem] m-auto">
          {fakeitems.items.map((i, key) =>
            <article key={key} className=" flex p-2 flex-col  justify-center rounded-lg bg-[#C2C2C2]" onClick={(event) => openEditModal(event, i)} >
              {i.image[0].secure_url &&
                <Image width={100} height={100} src={i.image[0].secure_url} alt={`product ${key}`}
                  className="w-6/12 m-auto h-auto" />
              }
              <h3 className="m-auto">{i.title ?? 'Titulo no disponible'}</h3>
              <p>{i.description ?? 'Descripcion no disponible'}</p>
              <span>tallas disponibles:{i.categories[0]?.name}</span>
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
