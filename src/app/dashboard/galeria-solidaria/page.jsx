"use client";
import React, { useEffect, useState } from "react";
import { getItemsShop } from "@/api/apiCall/functions";
import Pagination from "@/components/Pagination/Pagination";
import Loading from "../loading";
import ItemModal from "@/components/Dashboard/GaleriaSolidaria/ItemModal";
import ItemsSection from "@/components/Dashboard/GaleriaSolidaria/ItemsSection";

export default function Page() {
  const [items, setItems] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [itemToEdit, setItemToEdit] = useState({});
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [windowWidth, setWindowWidth] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      let itemsPerPage = null;

      if (width < 425) {
        itemsPerPage = 1;
      } else if (width >= 425 && width <= 768) {
        itemsPerPage = 4;
      } else {
        itemsPerPage = 3;
      }

      setWindowWidth(width);
      setItemsPerPage(itemsPerPage);
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [windowWidth]);
  useEffect(() => {
    const fetchItems = async () => {
      if (itemsPerPage !== null) {
        const data = await getItemsShop(actualPage, itemsPerPage);
        setItems(data.items.items);
        setTotalPages(data.items.totalPages);
      }
    };
    fetchItems();
  }, [actualPage, itemsPerPage]);

  useEffect(() => {
    setItems(items);
  }, [items]);

  const openCreateModal = () => {
    setItemToEdit(null);
    setModalType("create");
    setVisibleModal(true);
  };

  console.log(items);
  const openEditModal = (event, items) => {
    event.preventDefault();

    const itemprops = {
      id: items.id,
      image: items?.image,
      public_id: items?.image[0]?.public_id,
      title: items.title,
      description: items.description,
      categories: items.categories.map((i) => i.name),
      category: items.categories.map((i) => i.name),
    };
    setItemToEdit(itemprops);
    setModalType("edit");
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const changePage = (value) => {
    setActualPage(value);
  };

  if (!items) {
    return <Loading />;
  }

  return (
    <section className="h-full w-full px-4 sm:px-6 flex flex-col items-center pt-[70px] pb-8">
      {visibleModal && (
        <ItemModal
          closeModal={closeModal}
          ModalType={modalType}
          itemToEdit={itemToEdit}
        />
      )}
      <h1 className="text-center pt-6 text-2xl font-bold mb-4">
        Galeria Solidaria
      </h1>

      <div className="bg-[#4f4f4f] w-full flex flex-col px-3 py-5 rounded-xl items-center">
        <ItemsSection items={items} openEditModal={openEditModal} />

        <Pagination
          textcolor={"text-white"}
          pageNumber={actualPage}
          totalPages={totalPages}
          changePage={changePage}
        />

        <div className="flex justify-center sm:justify-end w-full">
          <button
            onClick={openCreateModal}
            className="py-2 px-4 bg-[#60EA4A] rounded font-semibold"
          >
            Añadir item +
          </button>
        </div>
      </div>
    </section>
  );
}
