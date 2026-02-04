import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// 1. Import the provider. Path goes up one level (..) to find 'context' folder
import { LanguageProvider } from "../context/LanguageContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Artístico",
  description: "Portfolio creado con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        {/* 2. WRAPPER: Everything inside here can "speak" both languages.
            We wrap Navbar too so the toggle button can work. */}
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen p-8">
            {children}
          </main>
        </LanguageProvider>

      </body>
    </html>
  );
}