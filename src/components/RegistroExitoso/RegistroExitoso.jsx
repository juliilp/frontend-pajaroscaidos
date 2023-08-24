import Image from 'next/image'
import clapimage from '../../../public/images/clap_image.png'
export default function RegistroExitoso() {

    return (
        <div className="min-h-screen flex items-center justify-center  flex-col gap-4 md:flex-row w-full text-[#3D3D3D]">

            <section className=''>
                <Image src={clapimage} className=' max-w-full w-[16rem] md:w-[20rem] h-auto' alt='claps' />
            </section>
            <section className='flex flex-col gap-8 items-center  '>
                <h1 className=' text-3xl md:text-5xl font-bold'>Registro exitoso</h1>
                <p className='text-lg md:text-2xl'>ya puedes ir a ver tu perfil</p>
                <button className=' text-white rounded-lg p-3 text-base md:text-xl bg-green hover:bg-[green]'>Ok! llevame a mi perfil</button>
            </section>

        </div>
    )
}