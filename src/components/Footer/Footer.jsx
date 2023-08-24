import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import logo from '../../../public/images/Logo.png'
import Image from 'next/image'
export default function Footer() {

    const textStyles = ' 2xl:text-2xl xl:text-xl lg:text-lg'
    return (
        <footer className="flex items-center h-[25rem]  bg-darkgray  text-lightgray flex-col 
         sm:gap-0 sm:justify-between  sm:items-stretch  sm:flex-row w-full sm:min-h-[10rem] sm:h-[12rem]">

            <div className=' w-full h-3/6  flex  justify-center relative  
            sm:h-full  sm:w-4/12  '>

                <Image src={logo} alt='PajarosCaidosLogo' priority={false} quality={100} className=' h-[120%] w-auto m-auto  absolute sm:h-full ' />
            </div>

            <div className='  flex  justify-start  items-start w-fit  flex-col  gap-3 
            sm:items-stretch  sm:w-6/12 sm:justify-center
             md:w-7/12 
             lg:w-8/12 '>
                <article >
                    <a href="https://twitter.com/pajaros_caidos" target='_blank' className=' flex items-center gap-3 w-fit hover:text-white' title='Twitter'>
                        <BsTwitter className=' text-3xl' />
                        <span className={`${textStyles}`}>
                            @pajaros_caidos
                        </span>
                    </a>
                </article>
                <article>
                    <a href="https://www.facebook.com/refugio.de.aves.pajaros.caidos" target='_blank' className=' flex items-center gap-3 w-fit hover:text-white' title='Facebook'>

                        <FaFacebookF className=' text-3xl' />
                        <span className={`${textStyles}`}>
                            Refugio de aves - Pájaros Caídos
                        </span>
                    </a>
                </article>
                <article>
                    <a href="https://www.youtube.com/channel/UChNlf6DgNLxdnuJ47uwAjXA" target='_blank' className='flex items-center gap-3 w-fit hover:text-white' title='Youtube'>
                        <AiOutlineYoutube className='text-4xl' />
                        <span className={`${textStyles}`}>
                            Pájaros Caidos
                        </span>
                    </a>
                </article>
                <article>
                    <a href="https://www.instagram.com/ongpajaroscaidos/" target='_blank' className=' flex items-center gap-3 w-fit hover:text-white' title='Instagram'>
                        <BsInstagram className=' text-3xl' />
                        <span className={`${textStyles}`}>
                            @ongpajaroscaidos
                        </span>
                    </a>
                </article>
            </div>

        </footer>
    )
}