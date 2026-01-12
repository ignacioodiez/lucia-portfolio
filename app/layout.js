import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // OJO: La ruta cambia al no tener src

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Artístico",
  description: "Portfolio creado con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}