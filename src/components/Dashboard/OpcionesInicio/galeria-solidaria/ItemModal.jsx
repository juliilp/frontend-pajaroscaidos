import { createNewItem, deleteShopItem, editShopItem } from "@/api/apiCall/functions";
import Image from "next/image";
import { useEffect, useState } from "react"
import Alerts from "@/components/Alerts/Alerts";
import FormShop from "./FormShop";
import ShopCategories from "./ShopCategories";

export default function ItemModal({ closeModal, ModalType, itemToEdit, refreshPage }) {

    useEffect(() => {
        const SideBarAdmin = document.getElementById('SideBarAdmin');
        const footer = document.getElementById('footer');
        const Body = document.getElementById('Body');
        const effect = () => {
            SideBarAdmin && (SideBarAdmin.style.zIndex = '20')
            footer && (footer.style.zIndex = '20')
            footer && (footer.style.position = 'relative')
            Body && (Body.style.overflow = 'hidden')
        }
        effect();
        return () => {
            SideBarAdmin && (SideBarAdmin.style.zIndex = '0')
            footer && (footer.style.zIndex = '0')
            footer && (footer.style.position = 'static')
            Body && (Body.style.overflow = 'auto')
        }
    }, [])
    const [newItem, setNewItem] = useState({ image: "", title: "", description: "", categories: [""], category: [], price: "5" });
    useEffect(() => {
        itemToEdit ? setNewItem(itemToEdit) : null
    }, [])

    const [mode, setMode] = useState({
        create: ModalType === 'create',
        edit: ModalType === 'edit',
        delete: false
    })

    const [startEdit, setStartEdit] = useState(false)
    const [seeAlert, setSeeAlert] = useState(false)
    const [successFullAlert, setSuccesFullAlert] = useState({ state: false, message: '' })
    const [categoriesToDelete,setCategoriesToDelete]=useState([])
    const [imageToDelete,setimageToDelete]=useState([])
    
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setNewItem({
            ...newItem,
            image: file,
            newImage: file,
        });
        setimageToDelete([newItem.public_id])
        !startEdit && setStartEdit(true)
    };
    const successFullChanges = () => {
        const message = mode.create ? `Se ha creado con exito ${newItem.title}` :
         mode.delete ? `Se ha eliminado con exito ${newItem.title}.` :
          `Se ha editado con exito ${newItem.title}.`

        setSeeAlert(false);
        setSuccesFullAlert({ state: true, message: message })
        setTimeout(() => {
            closeModal()
            refreshPage()
        }, 3000);
    }
    const handleCreate = () => {

        seeAlert ? createNewItem(newItem).then((res) => successFullChanges()).catch(error => console.log(error)) :
            setSeeAlert(true)

    }
    const closeAlert = () => {
        setSeeAlert(false)
        closeModal()
        setMode({ ...mode, delete: false })
    }
    const handleEdit = () => {
        const edited={
            ...newItem,
            category:newItem.category.join()
        }
        seeAlert ? editShopItem(newItem.id, edited,categoriesToDelete,imageToDelete).then((res) => successFullChanges()).catch(error => console.log(error)) : setSeeAlert(true)

    }
    const handleDelete = () => {
        setMode({ ...mode, delete: true })
        seeAlert ? deleteShopItem(newItem.id).then((res) => successFullChanges()).catch(error => console.log(error)) : setSeeAlert(true)
    }
    let imagePreview = null;

    if (newItem.image && newItem.image instanceof Blob) {
        imagePreview = URL.createObjectURL(newItem.image);
    }

    return (
        <div className="bg-[#686868cc]  min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">

            {seeAlert && mode.delete && <Alerts title={`Eliminar ${newItem.title}`}
                textdetails={'¿Desea borrar el producto?'} confirm={'Si Borrar'} callback={handleDelete}
                closemodal={closeAlert} />
            }
            {successFullAlert.state && <Alerts title={`Exito!`}
                textdetails={successFullAlert.message} confirm={'Entendido'}
                closemodal={closeAlert} />}

            {seeAlert && mode.edit && !mode.delete && <Alerts title={`Confirmar edicion`}
                textdetails={'¿Desea editar el producto?'} confirm={'Si editar'} callback={handleEdit}
                closemodal={closeAlert} />}
            {seeAlert && mode.create && <Alerts title={`Crear ${newItem.title}`}
                textdetails={'¿Desea crear el nuevo producto?'} confirm={'Si crear'} callback={handleCreate}
                closemodal={closeAlert} />}

            <div className="flex flex-col items-center bg-[#C2C2C2] max-w-[45rem] min-w-[38rem] w-7/12 min-h-[28rem] gap-8 p-2">

                <section className="flex justify-end  w-full p-1">
                    <button onClick={closeModal} className="text-red-700  text-xl font-bold ">X</button>
                    <button onClick={() => console.log(newItem)}>ver</button>
                </section>

                <section className="flex justify-between w-full">
                    <article className="w-6/12 flex flex-col justify-center items-center gap-6">

                        {mode.edit && newItem.image &&
                            <Image className="h-[15rem] w-auto" width={100} height={100} src={imagePreview ?? newItem.image} alt={`product`} priority={true} />
                        }
                        {
                            mode.create && imagePreview && <Image className="h-[15rem] w-auto" width={100} height={100} src={imagePreview} alt={`product`} />
                        }
                        <input
                            type="file"
                            name="image"
                            onChange={handlePhotoChange}
                            id="selectimage"
                            className="hidden"
                            accept="image/*"
                        />
                        <label htmlFor="selectimage">{newItem.image ? 'Cambiar' : 'Añadir'} imagen</label>
                    </article>

                    <article className="w-6/12 bg-[#4F4F4F] flex flex-col gap-4  items-center p-4 min-h-[18rem] rounded-xl">

                        <FormShop setNewItem={setNewItem} startEdit={startEdit} setStartEdit={setStartEdit}
                            newItem={newItem} mode={mode} />

                        <ShopCategories newItem={newItem} setNewItem={setNewItem}
                            startEdit={startEdit} setStartEdit={setStartEdit}setCategoriesToDelete={setCategoriesToDelete} categoriesToDelete={categoriesToDelete} />
                    </article>

                </section>
                <article className="flex justify-end w-full">
                    {mode.create && <button className="bg-green text-white p-1 px-4 rounded-lg" onClick={handleCreate}>Crear item</button>}
                    {mode.edit && !startEdit ?
                        <button className="bg-red-500 text-white p-1 px-4 rounded-lg" onClick={handleDelete}>Borrar item</button> :
                        mode.edit && <button className="bg-green text-white p-1 px-4 rounded-lg" onClick={handleEdit}>Editar item</button>
                    }
                </article>
            </div>

        </div>
    )
}