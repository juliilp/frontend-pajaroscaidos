import "./globals.css";
import ContextProvider from "@/store/ContextProvider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProviderAuth from "@/components/ProviderAuth/ProviderAuth";
import { Baloo_Bhaijaan_2, Inter } from "next/font/google";

const baloo = Baloo_Bhaijaan_2({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-baloo",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Red Pajaros Caídos",
  description: "Participá en la comunidad de Pájaros Caídos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${baloo.variable} ${inter.variable}`}>
      <ProviderAuth>
        <body id="Body" className={`font-baloo`}>
          <ContextProvider>
            <Navbar />
            <main className="min-h-screen bg-[#D9D9D9]">{children}</main>
            <Footer />
          </ContextProvider>
        </body>
      </ProviderAuth>
    </html>
  );
}
