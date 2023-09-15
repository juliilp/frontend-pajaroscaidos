export default function Alerts({ closemodal, title, textdetails, confirm ,callback}) {
    
    return (
        <main className="bg-[#686868cc] z-10 min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">
            <div className="h-[20rem] w-5/12 max-w-[95%]  bg-lightgray flex flex-col items-center gap-4">
                <section className="flex justify-end items-center w-full">

                    <button onClick={closemodal} className="text-2xl p-2"> X</button>
                </section>
                <section className="text-3xl"><h1>{title}</h1></section>
                <section className="text-2xl flex flex-col items-center justify-around  h-3/6">
                    <p>{textdetails} </p>
                    <button className=" bg-green text-white p-2" onClick={()=>callback()}>{confirm ?? 'Entendido'}</button>
                </section>

            </div>
        </main>
    )
}