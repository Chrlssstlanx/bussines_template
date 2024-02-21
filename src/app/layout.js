import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Encabezado from "@/components/encabezado";
import PiePagina from "@/components/pie-pagina";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bussines Template",
  description: "Descripción del negocio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Encabezado />

        {children}

        <PiePagina />
      </body>
    </html>
  );
}
