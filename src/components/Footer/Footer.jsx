import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import logo from "../../../public/images/Logo.png";
import Image from "next/image";
export default function Footer() {
  const textStyles = " 2xl:text-2xl xl:text-xl lg:text-lg";
  return (
    <footer
      className=" flex items-center bg-darkgray px-6 text-lightgray 
      sm:gap-0 sm:justify-between sm:flex-row flex-col sm:py-1 py-3 gap-2 w-full"
    >
      <Image
        src={logo}
        alt="PajarosCaidosLogo"
        priority={false}
        width={100}
        height={100}
        className="h-full w-auto"
      />

      <p className="font-baloo">Derechos reservados ©PajarosCaidos</p>

      <div className="flex">
        <article>
          <a
            href="https://www.instagram.com/ongpajaroscaidos/"
            target="_blank"
            className=" flex items-center gap-3 w-fit hover:text-white"
            title="Instagram"
          >
            <BsInstagram className=" text-3xl" />
            <span className={`${textStyles}`}></span>
          </a>
        </article>

        <article>
          <a
            href="https://www.facebook.com/refugio.de.aves.pajaros.caidos"
            target="_blank"
            className=" flex items-center gap-3 w-fit hover:text-white"
            title="Facebook"
          >
            <FaFacebookF className=" text-3xl" />
            <span className={`${textStyles}`}></span>
          </a>
        </article>
        <article>
          <a
            href="https://twitter.com/pajaros_caidos"
            target="_blank"
            className=" flex items-center gap-3 w-fit hover:text-white"
            title="Twitter"
          >
            <BsTwitter className=" text-3xl" />
            <span className={`${textStyles}`}></span>
          </a>
        </article>
        <article>
          <a
            href="https://www.youtube.com/channel/UChNlf6DgNLxdnuJ47uwAjXA"
            target="_blank"
            className="flex items-center gap-3 w-fit hover:text-white"
            title="Youtube"
          >
            <AiOutlineYoutube className="text-4xl" />
            <span className={`${textStyles}`}></span>
          </a>
        </article>
      </div>
    </footer>
  );
}
