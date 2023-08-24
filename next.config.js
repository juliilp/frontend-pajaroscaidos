/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
//--------------------------------------------------------
/*
ERROR AL INICIAR SESsION:
Error: Invalid src prop (https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg) 
on `next/image`, hostname "t4.ftcdn.net" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
*/
module.exports = {
  // ...otras configuraciones

  images: {
    domains: ["t4.ftcdn.net", "lh3.googleusercontent.com", "ibb.co"], // Agrega aquí los dominios de las imágenes permitidas
  },
};
