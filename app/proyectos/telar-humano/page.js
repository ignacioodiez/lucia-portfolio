"use client";

import Link from 'next/link';
import { projects } from '../../../data/projects';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

export default function TelarPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const project = projects.find(p => p.slug === 'telar-humano');

  if (!project) return <div>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</div>;

  const imgSide = project.gallery?.[0] || project.image; // FOTO 1
  const imgGridRight = project.gallery?.[1];             // FOTO 2
  const imgGridFull = project.gallery?.[2];              // FOTO 3
  const imgGridLeft = project.gallery?.[3];              // FOTO 4

  // Traducir categorías
  const translatedCategories = project.categories
    ? project.categories.map(c => t.tags[c] || c).join(' / ')
    : (language === 'es' ? 'Sin categoría' : 'Uncategorized');

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- PARTE SUPERIOR (Split 25% / 75%) --- */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* IZQUIERDA: FOTO 1 (25%) */}
        <div className="w-full md:w-1/4 bg-white relative flex items-center justify-center border-r border-gray-100">
          
          <Link 
            href="/" 
            className="absolute top-6 left-6 z-10 text-sm font-medium text-gray-500 hover:text-black transition-colors bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
          >
              {language === 'es' ? '← Volver' : '← Back'}
          </Link>

          <div className="sticky top-0 h-screen w-full flex items-center justify-center p-0">
            <img 
              src={imgSide} 
              alt="Detalle lateral" 
              className="h-full w-full object-cover" 
            />
          </div>
        </div>

        {/* DERECHA: TEXTO (75%) */}
        <div className="w-full md:w-3/4 flex items-center bg-white">
          <div className="p-8 md:p-12 md:pr-24 w-full"> 
            
            <div className="mb-10 border-b border-black pb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                {project.title[language]}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono">
                <span className="text-black uppercase">
                    {translatedCategories}
                </span>
                <span>—</span>
                <span>{project.year}</span>
              </div>
            </div>

            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
                <p>{project.description[language]}</p>
            </div>

          </div>
        </div>

      </div>

      {/* --- PARTE INFERIOR (Grid con huecos) --- */}
      {imgGridLeft && imgGridRight && imgGridFull && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
            
            {/* FOTO 4 (Arriba Izq) */}
            <div className="col-span-1">
                <img 
                    src={imgGridLeft} 
                    alt="Detalle superior izquierda" 
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* FOTO 2 (Arriba Der) */}
            <div className="col-span-1">
                <img 
                    src={imgGridRight} 
                    alt="Detalle superior derecha" 
                    className="w-full h-full object-cover block"
                />
            </div>

            {/* FOTO 3 (Abajo Entera) */}
            <div className="col-span-1 md:col-span-2">
                <img 
                    src={imgGridFull} 
                    alt="Detalle inferior completo" 
                    className="w-full h-auto block"
                />
            </div>

        </div>
      )}

    </div>
  );
}