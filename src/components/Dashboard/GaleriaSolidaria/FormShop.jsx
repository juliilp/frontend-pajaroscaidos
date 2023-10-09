export default function FormShop({
  newItem,
  mode,
  setNewItem,
  startEdit,
  setStartEdit,
}) {
  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
    !startEdit && setStartEdit(true);
  };
  return (
    <>
      {mode.edit ? (
        <>
          <input
            type="text"
            value={newItem.title}
            name="title"
            onChange={handleChange}
            className="py-2 px-3 rounded-md w-full"
            placeholder="Ingrese el nuevo nombre."
          />
          <textarea
            className="w-full py-2 px-3 rounded-md"
            rows={4}
            value={newItem.description}
            name="description"
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            className="py-2 px-3 rounded-md w-full"
            value={newItem.title}
            placeholder="Ingrese el nombre del nuevo producto."
            onChange={handleChange}
            name="title"
          />

          <textarea
            className="w-full py-2 px-3 rounded-md"
            rows={4}
            onChange={handleChange}
            value={newItem.description}
            name="description"
          />
        </>
      )}
    </>
  );
}
