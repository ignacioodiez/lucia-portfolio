"use client"; // <--- 1. OBLIGATORIO

import Link from 'next/link';
import { projects } from '../../../data/projects';
import { useLanguage } from '../../../context/LanguageContext'; // <--- 2. CONTEXTO
import { translations } from '../../../data/translations';      // <--- 3. DICCIONARIO

export default function CartelPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const project = projects.find(p => p.slug === 'como-pegar-un-cartel');

  if (!project) return <div>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</div>;

  // Traducir categorías
  const translatedCategories = project.categories
    ? project.categories.map(c => t.tags[c] || c).join(' / ')
    : (language === 'es' ? 'Sin categoría' : 'Uncategorized');

  return (
    <div className="min-h-screen bg-white">
      
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="w-full md:w-1/2 bg-white relative flex items-center justify-center">
          
          <Link 
            href="/" 
            className="absolute top-6 left-6 z-10 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
              {language === 'es' ? '← Volver' : '← Back'}
          </Link>

          {/* Contenedor Sticky */}
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            
            <img 
              src="/img/cartel/FOTO1.jpg" 
              alt={project.title[language]} // <--- ALT TRADUCIDO
              className="max-h-screen w-auto object-contain shadow-lg" 
            />
            
          </div>
        </div>

        {/* COLUMNA DERECHA: TEXTO */}
        <div className="w-full md:w-1/2 flex items-center bg-white">
          <div className="p-8 md:p-24 max-w-2xl">
            
            <div className="mb-10 border-b border-black pb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                    {project.title[language]} {/* <--- TÍTULO TRADUCIDO */}
                </h1>
                <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono">
                    <span className="text-black uppercase">
                        {translatedCategories} {/* <--- CATEGORIAS TRADUCIDAS */}
                    </span>
                    <span>—</span>
                    <span>{project.year}</span>
                </div>
            </div>

            <div className="prose prose-lg text-gray-800 whitespace-pre-line mb-10">
                <p>{project.description[language]}</p> {/* <--- DESCRIPCIÓN TRADUCIDA */}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}