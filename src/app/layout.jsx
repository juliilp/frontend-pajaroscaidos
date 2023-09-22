import "./globals.css";
import ContextProvider from "@/store/ContextProvider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProviderAuth from "@/components/ProviderAuth/ProviderAuth";
import { Baloo_Bhaijaan_2 } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const baloo = Baloo_Bhaijaan_2({
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProviderAuth>
        <body id="Body" className={baloo.className}>
          <ContextProvider>
            <Navbar />
            <main className="min-h-screen bg-[#D9D9D9]">{children}</main>
          </ContextProvider>
          <Footer />
        </body>
      </ProviderAuth>
    </html>
  );
}
