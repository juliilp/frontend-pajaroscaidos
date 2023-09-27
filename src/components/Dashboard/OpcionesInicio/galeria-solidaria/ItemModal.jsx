import { createNewItem } from "@/api/apiCall/functions";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function ItemModal({ closeModal, ModalType, itemToEdit }) {

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
    const [newItem, setNewItem] = useState(itemToEdit ?? { image: "", title: "", description: "", categories: [""] });
    const [mode, setMode] = useState({
        create: ModalType === 'create',
        edit: ModalType === 'edit',
    })

    const [categories, setCategories] = useState('')
    const [startEdit, setStartEdit] = useState(false)

    const handleChange = (event) => {
        const { value, name } = event.target;
        setNewItem({
            ...newItem,
            [name]: value
        })
        !startEdit && setStartEdit(true)
    }

    const handleCategories = (event) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const { value } = event.target
        setCategories(value)
    }
    const selectCategories = (event) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const updated = [].concat(newItem.categories).filter(i => i)
        if (categories) {
            updated.push(categories)

            setNewItem({
                ...newItem,
                categories: updated
            });
            setCategories('')
        }
    }
    const deleteCategories = (event) => {
        const { value } = event.target
        const categories = [].concat(newItem.categories);
        const updated = categories.filter(i => i !== value);
        setNewItem({
            ...newItem,
            categories: updated
        });
    }
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        console.log("file: ", file);
        setNewItem({
            ...newItem,
            image: file
        });
        !startEdit && setStartEdit(true)
    };
    const handleCreate = () => {
        console.log(newItem);
        createNewItem(newItem)
    }
    const handleEdit = () => {
        console.log(newItem);
        createNewItem(newItem)
    }
    let imagePreview = null;

    if (newItem.image && newItem.image instanceof Blob) {
        imagePreview = URL.createObjectURL(newItem.image);
    }
    return (
        <div className="bg-[#686868cc]  min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">
            <div className="flex flex-col items-center bg-[#C2C2C2] max-w-[45rem] min-w-[38rem] w-7/12 min-h-[28rem] gap-8 p-2">

                <section className="flex justify-end  w-full p-1">
                    <button onClick={closeModal} className="text-red-700  text-xl font-bold ">X</button>
                </section>

                <section className="flex justify-between w-full">

                    <article className="w-6/12 flex flex-col justify-center items-center gap-6">

                        {mode.edit &&

                            <Image className="h-[15rem] w-auto" width={100} height={100} src={imagePreview ?? newItem.image} alt={`product`} />

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
                        {mode.edit ?
                            <>
                                <input type="text" defaultValue={newItem.title} value={newItem.title} name="title" onChange={handleChange} className="p-2 rounded-lg w-full" />
                                <textarea className="w-full p-2 h-4/6 " value={newItem.description} name="description" onChange={handleChange} />
                                <article className="w-full flex justify-between">
                                    <button onClick={selectCategories} className={` w-5/12 ${categories && 'bg-green'}`}>añadir categoria</button>
                                    <input type="text" value={categories} onChange={handleCategories} className="p-2 rounded-lg w-6/12" />
                                </article>
                                <article className="flex w-full gap-2 flex-wrap ">

                                    {newItem.categories && newItem.categories.map((i, key) =>
                                        <div className="flex   bg-white relative min-w-[8rem] " key={key}>
                                            <span>{i}</span>
                                            <button value={i} onClick={deleteCategories} className="absolute  top-0 right-0" >x</button>
                                        </div>
                                    )}
                                </article>
                            </>
                            :
                            <>
                                <input type="text" className="p-2 rounded-lg w-full" value={newItem.title} placeholder="Ingrese el nombre del nuevo item" onChange={handleChange} name="title" />
                                <textarea className="w-full p-2 h-4/6 " onChange={handleChange} value={newItem.description} name="description" />
                                <input type="text" className="p-2 rounded-lg w-full" placeholder="Ingrese los detalles del nuevo item." />

                            </>
                        }
                    </article>

                </section>
                <article className="flex justify-end w-full">
                    {mode.create && <button className="bg-green text-white p-1 px-4 rounded-lg" onClick={handleCreate}>Crear item</button>}
                    {mode.edit && !startEdit ?
                        <button className="bg-red-500 text-white p-1 px-4 rounded-lg" onClick={handleCreate}>Borrar item</button> :
                        mode.edit && <button className="bg-green text-white p-1 px-4 rounded-lg" onClick={handleCreate}>Editar item</button>
                    }
                </article>
            </div>

        </div>
    )
}