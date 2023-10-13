export default function Alerts({ closemodal, title, textdetails, confirm, callback, noConfirm }) {
    //ej : const [seeAlert,setSeeAlert]=useState(false), 
    //    {seeAlert&&<Alerts/>}// si esta true mostrara el alerta.
    //para usar close modal:  crear funcion que cambie ese estado a false, y pasar esa funcion a este componente Alerts;
    //callback por si hay que ejecutar otra funcion cuando se pone en confirmar.
    const onClick=()=>{
        if(callback){
           return callback();
        }
       closemodal()
    }
    return (
        <main className="bg-[#686868cc] z-10 min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">
            <div className=" h-[15rem] sm:h-[20rem] w-9/12 sm:w-6/12 sm:min-w-[30rem] max-w-[95%]  bg-lightgray flex flex-col items-center gap-4">
                <section className="flex justify-end items-center w-full">

                    <button onClick={closemodal} className="text-2xl p-2"> X</button>
                </section>
                <section className=" font-semibold  text-xl sm:text-2xl 2xl:text-3xl"><h1>{title}</h1></section>
                <section className="text-lg flex flex-col items-center justify-around  h-3/6">
                    <p>{textdetails} </p>
                    <article className=" flex justify-evenly sm:justify-center gap-8 w-full"> 
                        <button className=" bg-red-500 text-white p-1 sm:p-2" onClick={closemodal}>{noConfirm ?? 'Cancelar'}</button>
                        <button className=" bg-green text-white p-1 sm:p-2" onClick={onClick}>{confirm ?? 'Aceptar'}</button>
                    </article>
                </section>

            </div>
        </main>
    )
}