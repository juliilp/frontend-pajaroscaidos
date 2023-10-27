import {
  createNewItem,
  deleteShopItem,
  editShopItem,
} from "@/api/apiCall/functions";
import Image from "next/image";
import { useEffect, useState } from "react";
import Alerts from "@/components/Alerts/Alerts";
import FormShop from "./FormShop";
import ShopCategories from "./ShopCategories";

const objetItem = {
  image: [],
  title: "",
  description: "",
  categories: [""],
  category: [],
  price: 5,
};

export default function ItemModal({ closeModal, ModalType, itemToEdit }) {
  const [startEdit, setStartEdit] = useState(false);
  const [seeAlert, setSeeAlert] = useState(false);
  const [successFullAlert, setSuccesFullAlert] = useState({
    state: false,
    message: "",
  });
  const [categoriesToDelete, setCategoriesToDelete] = useState([]);
  const [imageToDelete, setimageToDelete] = useState([]);

  useEffect(() => {
    const SideBarAdmin = document.getElementById("SideBarAdmin");
    const footer = document.getElementById("footer");
    const Body = document.getElementById("Body");
    const effect = () => {
      SideBarAdmin && (SideBarAdmin.style.zIndex = "20");
      footer && (footer.style.zIndex = "20");
      footer && (footer.style.position = "relative");
      Body && (Body.style.overflow = "hidden");
    };

    effect();

    return () => {
      SideBarAdmin && (SideBarAdmin.style.zIndex = "0");
      footer && (footer.style.zIndex = "0");
      footer && (footer.style.position = "static");
      Body && (Body.style.overflow = "auto");
    };
  }, []);

  const [newItem, setNewItem] = useState(objetItem);
  useEffect(() => {
    itemToEdit ? setNewItem(itemToEdit) : null;
  }, [itemToEdit]);

  const [mode, setMode] = useState({
    create: ModalType === "create",
    edit: ModalType === "edit",
    delete: false,
  });

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    const imageArray = Array.from(files);

    setNewItem({
      ...newItem,
      image: imageArray,
    });

    if (itemToEdit) {
      const publicsIds = itemToEdit.image.map((e) => e.public_id);
      setimageToDelete(publicsIds);
    }
    !startEdit && setStartEdit(true);
  };

  const successFullChanges = () => {
    const message = mode.create
      ? `Se ha creado con exito ${newItem.title}`
      : mode.delete
      ? `Se ha eliminado con exito ${newItem.title}.`
      : `Se ha editado con exito ${newItem.title}.`;

    setSeeAlert(false);
    setSuccesFullAlert({ state: true, message: message });
    setTimeout(() => {
      closeModal();
      setNewItem(objetItem);
    }, 3000);
  };

  const handleCreate = () => {
    seeAlert
      ? createNewItem(newItem)
          .then(() => successFullChanges())
          .catch((error) => console.log(error))
      : setSeeAlert(true);
  };

  const closeAlert = () => {
    setSeeAlert(false);
    closeModal();
    setMode({ ...mode, delete: false });
  };

  const handleEdit = () => {
    const edited = {
      ...newItem,
      newImage: newItem.image,
      category: newItem.category.join(),
    };
    seeAlert
      ? editShopItem(newItem.id, edited, categoriesToDelete, imageToDelete)
          .then(() => successFullChanges())
          .catch((error) => console.log(error))
      : setSeeAlert(true);
  };

  const handleDelete = () => {
    setMode({ ...mode, delete: true });
    seeAlert
      ? deleteShopItem(newItem.id)
          .then(() => successFullChanges())
          .catch((error) => console.log(error))
      : setSeeAlert(true);
  };

  let imagePreview = [];

  if (newItem.image && newItem.image[0] instanceof Blob) {
    for (const e of newItem.image) {
      imagePreview.push(URL.createObjectURL(e));
    }
  }

  return (
    <div className="bg-[#0000009c] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      {seeAlert && mode.delete && (
        <Alerts
          title={`Eliminar ${newItem.title}`}
          textdetails={"¿Desea borrar el producto?"}
          confirm={"Si Borrar"}
          callback={handleDelete}
          closemodal={closeAlert}
        />
      )}
      {successFullAlert.state && (
        <Alerts
          title={`Exito!`}
          textdetails={successFullAlert.message}
          confirm={"Entendido"}
          closemodal={closeAlert}
        />
      )}

      {seeAlert && mode.edit && !mode.delete && (
        <Alerts
          title={`Confirmar edicion`}
          textdetails={"¿Desea editar el producto?"}
          confirm={"Si editar"}
          callback={handleEdit}
          closemodal={closeAlert}
        />
      )}
      {seeAlert && mode.create && (
        <Alerts
          title={`Crear ${newItem.title}`}
          textdetails={"¿Desea crear el nuevo producto?"}
          confirm={"Si crear"}
          callback={handleCreate}
          closemodal={closeAlert}
        />
      )}

      <div className="flex justify-center items-center h-full my-6">
        <div className="flex flex-col items-end font-semibold rounded-xl pb-4 pt-3 px-6 max-w-[95%] bg-[#D9D9D9] lg:w-[720px]">
          <section className="flex justify-end w-full p-1">
            <button
              onClick={closeModal}
              className="text-2xl text-red-600 font-bold"
            >
              X
            </button>
          </section>

          <section className="flex flex-col items-center sm:flex-row sm:justify-between w-full">
            <article className="w-[38%] flex flex-col justify-center items-center gap-6">
              {mode.edit && newItem.image && newItem.image.length > 0 && (
                <div className="flex gap-4 w-full">
                  {newItem.image?.map((e, index) => (
                    <div key={index} className="w-full">
                      <Image
                        src={
                          imagePreview[0] ? imagePreview[index] : e.secure_url
                        }
                        alt={`Imagen ${index}`}
                        width={100}
                        height={100}
                        className="w-full "
                      />
                    </div>
                  ))}
                </div>
              )}
              {mode.create && imagePreview[0] && (
                <div className="flex gap-4">
                  {imagePreview.map((e, index) => (
                    <div key={index}>
                      <Image
                        src={e}
                        alt={`ImagenDos ${index}`}
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              )}
              <input
                type="file"
                name="image"
                onChange={handlePhotoChange}
                id="selectimage"
                className="hidden"
                accept="image/*"
                multiple
              />
              <label
                htmlFor="selectimage"
                className="bg-[#43851dc9] text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md cursor-pointer"
              >
                {newItem.image && newItem.image.length > 0
                  ? "Cambiar"
                  : "Añadir"}{" "}
                imagen
              </label>
            </article>

            <article className="w-[60%] bg-[#4F4F4F] flex flex-col gap-4  items-center p-4 min-h-[18rem] rounded-xl">
              <FormShop
                setNewItem={setNewItem}
                startEdit={startEdit}
                setStartEdit={setStartEdit}
                newItem={newItem}
                mode={mode}
              />

              <ShopCategories
                newItem={newItem}
                setNewItem={setNewItem}
                startEdit={startEdit}
                setStartEdit={setStartEdit}
                setCategoriesToDelete={setCategoriesToDelete}
                categoriesToDelete={categoriesToDelete}
              />
            </article>
          </section>
          <article className="flex justify-end w-full mt-4">
            {mode.create && (
              <button
                className="bg-[#43851dc9] text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md"
                onClick={handleCreate}
              >
                Crear item
              </button>
            )}
            {mode.edit && !startEdit ? (
              <button
                className="bg-red-500 text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md"
                onClick={handleDelete}
              >
                Borrar item
              </button>
            ) : (
              mode.edit && (
                <button
                  className="bg-[#43851dc9] text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md"
                  onClick={handleEdit}
                >
                  Editar item
                </button>
              )
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
