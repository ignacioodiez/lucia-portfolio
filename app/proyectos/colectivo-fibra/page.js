"use client"; // <--- 1. OBLIGATORIO

import Link from 'next/link';
import { projects } from '../../../data/projects'; 
import { useLanguage } from '../../../context/LanguageContext'; // <--- 2. CONTEXTO
import { translations } from '../../../data/translations';      // <--- 3. DICCIONARIO

export default function FibraParentPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // 1. Buscamos al PADRE
  const parentProject = projects.find(p => p.slug === 'colectivo-fibra');

  // 2. Buscamos a los HIJOS
  const childProjects = projects.filter(p => p.group === 'FIBRA' && p.isFibraChild);

  if (!parentProject) return <div>{language === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</div>;

  // Traducir categorías del padre
  const parentCategories = parentProject.categories.map(c => t.tags[c] || c).join(' / ');

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors px-4 py-2 rounded-full"
        >
            {language === 'es' ? '← Volver' : '← Back'}
        </Link>
      </div>

      {/* 2. CABECERA DEL PROYECTO PADRE */}
      <div className="w-full mb-16 border-b border-black pb-12">
            
            <h1 className="text-5xl bg-black text-white md:text-4xl font-bold mb-6 leading-tight uppercase tracking-tighter">
                {/* Traducimos el título por si acaso, aunque sea nombre propio */}
                ☆ {parentProject.title[language]} ☆ 
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                 <div className="flex justify-between items-end w-full text-sm font-mono text-gray-500">
                    <span className="text-black uppercase tracking-wider text-lg">
                        {parentCategories} {/* <--- CATEGORIAS TRADUCIDAS */}
                    </span>
                    <span className="text-black font-bold text-2xl">
                        {parentProject.year}
                    </span>
                </div>
            </div>

            {/* Descripción */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line max-w-none mb-8">
                <p>{parentProject.description[language]}</p> {/* <--- DESCRIPCION TRADUCIDA */}
            </div>
            
      </div>

      {/* 3. SECCIÓN: PROYECTOS REALIZADOS (MOSAICO DE HIJOS) */}
      <div className="w-full">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 border-l-4 border-black pl-4">
            {language === 'es' 
              ? 'Proyectos realizados por el colectivo' 
              : 'Projects carried out by the collective'}
        </h2>

        {/* --- GRID MASONRY (Copiado de la Home) --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            
            {childProjects.map((child) => (
            <Link 
                href={`/proyectos/${child.slug}`} 
                key={child.id}
                className="block break-inside-avoid relative group rounded-sm border border-gray-100 bg-gray-50 overflow-hidden"
            >
                {/* LÓGICA VÍDEO vs FOTO */}
                {child.gridVideo ? (
                    <video 
                        src={child.gridVideo} 
                        autoPlay loop muted playsInline 
                        className="w-full h-auto block"
                    />
                ) : (
                    <img 
                        src={child.image} 
                        alt={child.title[language]} // <--- ALT TRADUCIDO
                        className="w-full h-auto object-contain block"
                    />
                )}

                {/* CAPA FANTASMA (HOVER) */}
                <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white px-5 py-4 border-t border-gray-50 flex justify-between items-center w-full shadow-sm">
                        <div className="flex flex-col">
                            <h2 className="text-black text-lg font-bold uppercase tracking-wide leading-none">
                                {child.title[language]} {/* <--- TITULO HIJO TRADUCIDO */}
                            </h2>
                            <span className="text-[10px] font-mono text-gray-400 uppercase mt-1">
                                {child.year}
                            </span>
                        </div>
                        <span className="text-black text-xl">→</span>
                    </div>
                </div>

            </Link>
            ))}

        </div>

        {/* Mensaje si no hay hijos aún */}
        {childProjects.length === 0 && (
            <p className="text-gray-400 italic">
                {language === 'es' ? 'Próximamente se añadirán los proyectos...' : 'Projects coming soon...'}
            </p>
        )}

      </div>

    </div>
  );
}