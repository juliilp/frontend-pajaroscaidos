import { createCategory, getCategories } from "@/api/apiCall/functions";
import { useState, useEffect } from "react";

export default function ShopCategories({ newItem, setNewItem, setStartEdit, startEdit ,setCategoriesToDelete,categoriesToDelete}) {
    const [categories, setCategories] = useState('')
    const [apicategories, setApiCategories] = useState([])
    const [newCategory, setNewCategory] = useState(false)
    const [resetCategory, setReseteCategory] = useState(0)
    useEffect(() => {
        const action = async () => {
            const categories = await getCategories();
            console.log('en use');
            // if (!apicategories.length) setApiCategories(categories)
            // else setApiCategories([])
            setApiCategories(categories)
        }
        action()
        return () => setApiCategories([])
    }, [resetCategory])

    const selectCategories = (event, create) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const value = event.target.value ? event.target.value : categories
        const array = []
        value && array.push()
        const updated = array.concat(newItem.categories).concat(newItem.category).concat(value)
        if (categories || value) {
            console.log(categories);

            setNewItem({
                ...newItem,
                category: updated.filter((item, index, updated) => updated.indexOf(item) === index && item),
                categories: updated.filter((item, index, updated) => updated.indexOf(item) === index && item)
            });
            setCategories('')
        }
        if (categories) {
            createCategory(categories).then((res) => setReseteCategory(resetCategory+1))
            .catch((err) => console.log(err))
        }
        newCategory && setNewCategory(false)
    }

    const deleteCategories = (event) => {
        const { value } = event.target
        const categories = [].concat(newItem.categories).concat(newItem.category);
        const updated = categories.filter(i => i !== value);
        setCategoriesToDelete([...categoriesToDelete,value])
        setNewItem({
            ...newItem,
            category: updated.filter((item, index, updated) => updated.indexOf(item) === index),
            categories: updated.filter((item, index, updated) => updated.indexOf(item) === index)
        });
        setStartEdit(true)
    }

    const handleCategories = (event) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const { value } = event.target
        setCategories(value)
    }

    return <>
        <article className="flex flex-col items-center">
            <button onClick={() => console.log(apicategories)}>ver estado</button>
            <select name="" id="" onChange={selectCategories}>
                <option value="" >Categorias</option>
                {apicategories?.length && apicategories.map((i, key) =>
                    <option key={key} value={i.name} >
                        {i.name}
                    </option>
                )}
                {!apicategories?.length && <option value="" >Sin opciones</option>}
            </select>
            {!newCategory && <span onClick={() => setNewCategory(true)} className="text-white cursor-pointer hover:text-gray-200">¿No encuentras la categoria ideal?</span>}
        </article>

        <article className="w-full flex justify-between">
            {newCategory &&
                <>
                    <button onClick={selectCategories} className={` w-5/12 ${categories && 'bg-green'}`}>añadir categoria</button>
                    <input type="text" value={categories} onChange={handleCategories} className="p-2 rounded-lg w-6/12" />
                </>
            }
        </article>
        <article className="flex w-full gap-2 flex-wrap ">

            {newItem.categories && newItem.category.map((i, key) =>
                <div className="flex   bg-white relative min-w-[8rem] " key={key}>
                    <span>{i}</span>
                    <button value={i} onClick={deleteCategories} className="absolute  top-0 right-0" >x</button>
                </div>
            )}
        </article>
    </>
}