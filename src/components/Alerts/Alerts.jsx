export default function Alerts({ closemodal, title, textdetails, confirm, callback, noConfirm }) {
    //ej : const [seeAlert,setSeeAlert]=useState(false), 
    //    {seeAlert&&<Alerts/>}// si esta true mostrara el alerta.
    //para usar close modal:  crear funcion que cambie ese estado a false, y pasar esa funcion a este componente Alerts;
    //callback por si hay que ejecutar otra funcion cuando se pone en confirmar.

    return (
        <main className="bg-[#686868cc] z-10 min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">
            <div className="h-[20rem] w-5/12 max-w-[95%]  bg-lightgray flex flex-col items-center gap-4">
                <section className="flex justify-end items-center w-full">

                    <button onClick={closemodal} className="text-2xl p-2"> X</button>
                </section>
                <section className="text-3xl"><h1>{title}</h1></section>
                <section className="text-2xl flex flex-col items-center justify-around  h-3/6">
                    <p>{textdetails} </p>
                    <article className=" flex justify-center gap-4 w-full"> 
                        <button className=" bg-red-500 text-white p-2" onClick={closemodal}>{noConfirm ?? 'Cancelar'}</button>
                        <button className=" bg-green text-white p-2" onClick={() => callback() ?? null}>{confirm ?? 'Aceptar'}</button>
                    </article>
                </section>

            </div>
        </main>
    )
}