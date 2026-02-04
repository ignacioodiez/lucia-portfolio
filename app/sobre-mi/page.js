"use client"; // <--- 1. OBLIGATORIO: Para usar el hook de idioma

import { useLanguage } from '../../context/LanguageContext'; 
import { translations } from '../../data/translations'; // <--- Ruta corregida

export default function AboutPage() {
  const { language } = useLanguage(); 
  const t = translations[language]; // Cargamos los textos (es o en)

  return (
    <div className="container mx-auto max-w-5xl py-12 px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* FOTO DE LUCÍA (Esta no cambia) */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative shadow-lg">
            <img 
               src="/img/sobre-mi.JPG"
               alt="Lucía Martín Lagunas" 
               className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* TEXTO BIO (Ahora dinámico) */}
        <div className="w-full md:w-2/3 space-y-6 text-lg leading-relaxed text-gray-800 font-light">
          
          <h1 className="text-4xl font-bold mb-2 text-black tracking-tight">Lucía Martín Lagunas</h1>
          
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-bold">
            {t.about.location} {/* Madrid, España / Madrid, Spain */}
          </p>
          
          {/* Usamos los párrafos del diccionario */}
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
          
          {/* SECCIÓN CONTACTO SIMPLE */}
          <div className="pt-8 border-t border-gray-200 mt-8">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
                {t.about.contactTitle}
            </h3>
            <div className="flex gap-6 text-sm">
              <a href="mailto:luciamartinlagunas@gmail.com" className="hover:text-gray-500 underline">Email</a>
              <a href="https://instagram.com/lucayuca" target="_blank" className="hover:text-gray-500 underline">Instagram</a>
              <a href="https://linkedin.com/in/lucía-martín-lagunas-profile" target="_blank" className="hover:text-gray-500 underline">LinkedIn</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}