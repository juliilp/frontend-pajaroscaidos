export default function Alerts({
  closemodal,
  title,
  textdetails,
  confirm,
  callback,
  noConfirm,
  showCancelButton = true,
}) {
  //ej : const [seeAlert,setSeeAlert]=useState(false),
  //    {seeAlert&&<Alerts/>}// si esta true mostrara el alerta.
  //para usar close modal:  crear funcion que cambie ese estado a false, y pasar esa funcion a este componente Alerts;
  //callback por si hay que ejecutar otra funcion cuando se pone en confirmar.

  const onClick = (result) => {
    if (callback) {
      return callback(result);
    }
    closemodal();
  };

  return (
    <main className="bg-[#0000009c] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      <div className="flex justify-center items-center h-full my-6">
        <div className="flex flex-col items-end font-semibold rounded-xl pb-12 pt-3 px-6 max-w-[95%] bg-[#D9D9D9] lg:w-[640px]">
          <section className="flex justify-end items-center w-full">
            <button
              onClick={closemodal}
              className="text-2xl text-red-600 font-bold"
            >
              {" "}
              X
            </button>
          </section>
          <section className="font-semibold text-xl sm:text-2xl 2xl:text-3xl w-full flex justify-center mb-4">
            <h1>{title}</h1>
          </section>
          <section className="text-lg flex-col items-center  w-full flex justify-center gap-4">
            <p>{textdetails} </p>
            <article className=" flex justify-evenly sm:justify-center gap-8 w-full">
              {showCancelButton && (
                <button
                  className=" bg-red-500 text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md"
                  onClick={() => onClick(false)}
                >
                  {noConfirm ?? "Cancelar"}
                </button>
              )}
              <button
                className="bg-[#43851dc9] text-white py-1 px-3 sm:px-4 sm:py-2 rounded-md"
                onClick={() => onClick(true)}
              >
                {confirm ?? "Aceptar"}
              </button>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
