"use client";
import React, { useEffect, useState } from "react";
import ItemModal from "@/components/Dashboard/OpcionesInicio/galeria-solidaria/ItemModal";
import { getItemsShop } from "@/api/apiCall/functions";
import ProductSection from "@/components/Dashboard/OpcionesInicio/galeria-solidaria/ProductSection";
import Pagination from "@/components/Pagination/Pagination";

export default function Page() {
  const [data, setData] = useState({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalType, setModalType] = useState('')
  const [itemToEdit, setItemToEdit] = useState({})
  const [actualPage,setActualPage]=useState(1)
  const [totalPages,setTotalPages]=useState(0)
  const [resresh,setResresh]=useState(0)
  useEffect(() => {
    const action = async () => {
      try {
        const data = await getItemsShop(actualPage);
        setData(data.items);
        setTotalPages(data.items.totalPages);
        console.log(data.items.totalPages, "total apg");
      } catch (error) {
        console.log(error);
      }
    };
    action();
  }, [actualPage,resresh])
  const openCreateModal = () => {
    setItemToEdit(null);
    setModalType("create");
    setVisibleModal(true);
  };

  const openEditModal = (event, data) => {
    event.preventDefault();

    const itemprops = {
      id:data.id,
      image: data?.image[0]?.secure_url,
      public_id: data?.image[0]?.public_id,
      title: data.title,
      description: data.description,
      categories: data.categories.map(i=>i.name),
      category: data.categories.map(i=>i.name)
    }
    setItemToEdit(itemprops)
    setModalType('edit');
    setVisibleModal(true)
  }
  const closeModal = () => {
    setVisibleModal(false)
  }
  const changePage=(value)=>{
    setActualPage(value)
  }
 const refreshPage=()=>{
  setResresh(resresh+1)
 }
  return (
    <div className=" text-sm md:text-sm  lg:text-base xl:text-lg 2xl:text-xl 
     min-h-screen w-full flex flex-col justify-center items-center gap-6 pt-[90px] pb-10">
      {visibleModal && <ItemModal closeModal={closeModal} ModalType={modalType} itemToEdit={itemToEdit} refreshPage={refreshPage} />}
      <section>
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Galeria Solidaria
        </h1>
      </section>
      
      <section className="   bg-[#4F4F4F] w-[95%] min-h-[20rem] flex flex-col gap-4 
      items-center   p-6 pb-0 pt-12 rounded-lg ">
        <ProductSection data={data} openCreateModal={openCreateModal} openEditModal={openEditModal} />

        <Pagination textcolor={'text-white'} pageNumber={actualPage} totalPages={totalPages} changePage={changePage} />
      </section>

    </div>
  );
}
