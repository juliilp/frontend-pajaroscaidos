export default function FormShop({ newItem, mode ,setNewItem,startEdit,setStartEdit}) {
   
  
    const handleChange = (event) => {
        const { value, name } = event.target;
        setNewItem({
            ...newItem,
            [name]: value
        })
        !startEdit && setStartEdit(true)
    }
    return (
        <>
            {mode.edit ?
                <>
                    <input type="text" defaultValue={newItem.title} value={newItem.title} name="title" onChange={handleChange}
                        className="p-2 rounded-lg w-full" placeholder="Ingrese el nuevo nombre."/>
                    <textarea className="w-full p-2 h-4/6 " value={newItem.description} name="description" onChange={handleChange} />
                </> :

                <>
                    <input type="text" className="p-2 rounded-lg w-full" value={newItem.title} placeholder="Ingrese el nombre del nuevo producto."
                        onChange={handleChange} name="title" />

                    <textarea className="w-full p-2 h-4/6 " onChange={handleChange}
                        value={newItem.description} name="description" />

                </>
            }
        </>
    )
}