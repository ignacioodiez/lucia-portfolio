"use client"; // <--- 1. OBLIGATORIO: Para usar el idioma

import Link from 'next/link';
import { projects } from '../../../data/projects'; 
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';  // <--- 2. RUTA CORREGIDA (3 niveles arriba)

export default function BordaPalestinaPage() {
  const { language } = useLanguage(); // <--- 3. SACAR EL IDIOMA
  const t = translations[language];   // <--- 4. USAR DICCIONARIO
  
  const project = projects.find(p => p.slug === 'borda-palestina');

  if (!project) return <div>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</div>;

  // Traducir categorías
  const translatedCategories = project.categories
    ? project.categories.map(c => t.tags[c] || c).join(' / ')
    : (language === 'es' ? 'Sin categoría' : 'Uncategorized');

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
            {language === 'es' ? '← Volver' : '← Back'}
        </Link>
      </div>

      {/* 2. CABECERA */}
      <div className="w-full mb-16 border-b border-black pb-8">
            
            {/* ETIQUETA FIBRA */}
            <Link 
                href="/proyectos/colectivo-fibra"
                className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
            >
                 {language === 'es' ? '☆ Proyecto parte de Colectivo FIBRA ☆' : '☆ Part of FIBRA Collective ☆'}
            </Link>

            {/* TITULO */}
            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                {project.title[language]} 
            </h1>
        
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono mb-12">
                <span className="text-black uppercase">
                    {translatedCategories} {/* <--- CATEGORIAS TRADUCIDAS */}
                </span>
                <span>—</span>
                <span>{project.year}</span>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
                <p>{project.description[language]}</p> 
            </div>

      </div>

      {/* 3. GALERÍA */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full">
          {project.gallery?.map((img, index) => (
            <div key={index} className="max-w-xl w-full">
                <img 
                    src={img} 
                    alt={`Detalle ${project.title[language]} ${index + 1}`} 
                    className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300"
                />
            </div>
          ))}
      </div>

    </div>
  );
}