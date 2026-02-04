"use client"; // <--- 1. OBLIGATORIO

import Link from 'next/link';
import { projects } from '../../../data/projects';
import { useLanguage } from '../../../context/LanguageContext'; // <--- 2. CONTEXTO
import { translations } from '../../../data/translations';      // <--- 3. DICCIONARIO

export default function PostsexualidadesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const project = projects.find(p => p.slug === 'congreso-postsexualidades');

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
      <div className="w-full mb-12 border-b border-black pb-8">
            
            {/* BADGE FIBRA */}
            <Link 
                href="/proyectos/colectivo-fibra"
                className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
            >
                 {language === 'es' ? '☆ Proyecto parte de Colectivo FIBRA☆' : '☆ Part of FIBRA Collective ☆'}
            </Link>
            
            {/* TÍTULO */}
            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                {project.title[language]} {/* <--- TÍTULO TRADUCIDO */}
            </h1>
            
            {/* METADATOS */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono mb-12">
                <span className="text-black uppercase">
                    {translatedCategories} {/* <--- CATEGORIAS TRADUCIDAS */}
                </span>
                <span>—</span>
                <span>{project.year}</span>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
                <p>{project.description[language]}</p> {/* <--- DESCRIPCIÓN TRADUCIDA */}
            </div>
      </div>

      {/* 3. GALERÍA TIPO PINTEREST */}
      <div className="columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4">
          
          {project.gallery?.map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4">
                <img 
                    src={img} 
                    alt={`Imagen congreso ${index + 1}`} 
                    className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300"
                />
            </div>
          ))}

      </div>

    </div>
  );
}