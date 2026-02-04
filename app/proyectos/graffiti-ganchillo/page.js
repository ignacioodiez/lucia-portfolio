"use client";

import Link from 'next/link';
import { projects } from '../../../data/projects';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../data/translations';

export default function GrafittiPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const project = projects.find(p => p.slug === 'graffiti-ganchillo');

  if (!project) return <div>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</div>;

  const imgSide = project.gallery?.[1]; 
  const imgBottom = project.gallery?.[0] || project.image;

  // Traducir categorías
  const translatedCategories = project.categories
    ? project.categories.map(c => t.tags[c] || c).join(' / ')
    : (language === 'es' ? 'Sin categoría' : 'Uncategorized');

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors "
        >
            {language === 'es' ? '← Volver' : '← Back'}
        </Link>
      </div>

      {/* 2. BLOQUE SUPERIOR */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 relative">
        
        {/* COLUMNA DERECHA: TEXTO */}
        <div className="w-full md:w-3/4 flex flex-col justify-center">
          <div className="w-full"> 
            
            <div className="mb-8 border-b border-black pb-6">
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

            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-8 max-w-none">
                <p>{project.description[language]}</p>
            </div>

          </div>
        </div>

      </div>

      {/* 3. FOTO GRANDE ABAJO */}
      <div className="w-full">
         <img 
            src={imgBottom} 
            alt="Vista general" 
            className="w-full h-auto block rounded-sm"
         />
      </div>

    </div>
  );
}