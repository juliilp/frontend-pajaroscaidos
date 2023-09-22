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
    const [newItem, setNewItem] = useState(itemToEdit ?? {});
    const [mode, setMode] = useState({
        create: ModalType === 'create',
        edit: ModalType === 'edit',
    })
    const [categories, setCategories] = useState('')
    const handleChange = (event) => {
        const { value, name } = event.target;
        setNewItem({
            ...newItem,
            [name]: value
        })
    }

    const handleCategories = (event) => {
        event.preventDefault();
        const { value } = event.target
        setCategories(value)
    }
    const selectCategories = (event) => {
        event.preventDefault();
        const updated = [].concat(newItem.categories).filter(i=>i)
        if(categories){
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
        console.log(value)
        const updated = categories.filter(i => i !== value);
        console.log(updated, value);
        setNewItem({
            ...newItem,
            categories: updated
        });
    }
    console.log(newItem)
    return (
        <div className="bg-[#686868cc]  min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">
            <div className="flex flex-col items-center bg-[#C2C2C2] min-w-[30rem] w-6/12 min-h-[24rem] gap-2">

                <section className="flex justify-end  w-full p-1">
                    <button onClick={closeModal} className="text-red-700 p-2 text-xl ">X</button>
                </section>
                <h1> {mode.create ? 'Crear' : 'Editar'} un producto.</h1>

                <section className="flex justify-between w-full">

                    <article className="w-6/12 flex justify-center items-center">
                        {Object.entries(newItem).length ? <Image width={100} height={100} src={newItem.image} alt={`product`} /> :
                            <h1>aqui va la imagen</h1>}
                    </article>

                    <article className="w-6/12 bg-[#4F4F4F] flex flex-col gap-4  items-center p-4 min-h-[15rem]">
                        {Object.entries(newItem).length ?
                            <>
                                <input type="text" value={newItem.title} name="title" onChange={handleChange} className="p-2 rounded-lg w-full" />
                                <textarea className="w-full p-2 h-4/6 " value={newItem.description} name="description" onChange={handleChange} />
                                <article className="w-full flex justify-between">
                                    <button onClick={selectCategories} className={` w-5/12 ${categories && 'bg-green'}`}>añadir categoria</button>
                                    <input type="text" value={categories} onChange={handleCategories} className="p-2 rounded-lg w-6/12" />
                                </article>
                                <article className="flex w-full gap-2 flex-wrap ">

                                    {newItem.categories&& newItem.categories.map((i, key) =>
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
            </div>

        </div>
    )
}