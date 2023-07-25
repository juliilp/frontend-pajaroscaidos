import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import logo from '../../public/images/Logo.png'
import Image from 'next/image'
export default function Footer() {
    const textStyles=' 2xl:text-2xl xl:text-xl lg:text-lg'
    return (
        <footer className="flex sm:gap-0 sm:justify-between flex-col  items-center h-[25rem]  sm:items-stretch  sm:flex-row w-full bg-darkgrey sm:min-h-[10rem] sm:h-[12rem]  text-lightgrey">

            <div className=' w-full h-3/6 sm:h-full flex  justify-center  sm:w-4/12 relative  '>
     
                <Image  src={logo} alt='PajarosCaidosLogo' className='    h-[120%] sm:h-full w-auto m-auto  absolute' priority={false} quality={100} />
            </div>

            <div className='  flex  justify-start  items-start sm:items-stretch  w-fit sm:w-6/12 md:w-7/12 lg:w-8/12  flex-col sm:justify-center gap-3 '>
                <article >
                    <a href="https://twitter.com/pajaros_caidos" target='_blank'  className=' flex items-center gap-3 w-fit hover:text-white' title='Twitter'>
                        <BsTwitter className=' text-3xl' />
                        <span className={`${textStyles}`}>
                            @pajaros_caidos
                        </span>
                    </a>
                </article>
                <article>
                    <a href="https://www.facebook.com/refugio.de.aves.pajaros.caidos" target='_blank'  className=' flex items-center gap-3 w-fit hover:text-white' title='Facebook'>

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