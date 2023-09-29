import { getCategories } from "@/api/apiCall/functions";
import { useState ,useEffect} from "react";

export default function ShopCategories({newItem,setNewItem,setStartEdit,startEdit}) {
    const [categories, setCategories] = useState('')
    const [apicategories, setApiCategories] = useState([])

    useEffect(() => {
        const action = async () => { 
            const categories = await getCategories();
            if (categories.length) setApiCategories(categories)
            else setApiCategories([''])
        }
        action()
        return () => setApiCategories([''])
    }, [])
    
    const selectCategories = (event) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const updated = [].concat(newItem.categories).concat(newItem.category).filter(i => i)

        if (categories) {
            updated.push(categories)

            setNewItem({
                ...newItem,
                category: updated.filter((item, index, updated) => updated.indexOf(item) === index),
                categories: updated.filter((item, index, updated) => updated.indexOf(item) === index)
            });
            setCategories('')
        }
    }

    const deleteCategories = (event) => {
        const { value } = event.target
        const categories = [].concat(newItem.categories).concat(newItem.category);
        const updated = categories.filter(i => i !== value);
        setNewItem({
            ...newItem,
            category: updated.filter((item, index, updated) => updated.indexOf(item) === index),
            categories: updated.filter((item, index, updated) => updated.indexOf(item) === index)
        });
    }

    const handleCategories = (event) => {
        event.preventDefault();
        !startEdit && setStartEdit(true)
        const { value } = event.target
        setCategories(value)
    }

   return <>

        <article className="w-full flex justify-between">
            <button onClick={selectCategories} className={` w-5/12 ${categories && 'bg-green'}`}>añadir categoria</button>
            <input type="text" value={categories} onChange={handleCategories} className="p-2 rounded-lg w-6/12" />
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