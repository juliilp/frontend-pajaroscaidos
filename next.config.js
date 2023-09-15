/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "t4.ftcdn.net",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ], // Agrega aquí los dominios de las imágenes permitidas
  },
};

module.exports = nextConfig;
