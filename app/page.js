'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Home() {
  const { language } = useLanguage(); 
  const t = translations[language];

  // Estado para las etiquetas seleccionadas
  const [selectedTags, setSelectedTags] = useState([]);

  // --- 1. PREPARAR DATOS ---
  const allTags = useMemo(() => {
    const tags = projects.flatMap(p => p.tags);
    return [...new Set(tags)].sort();
  }, []);

  // --- LÓGICA DE FILTRADO HÍBRIDA (FIBRA=AND, RESTO=OR) ---
  const allFiltered = projects.filter((project) => {
    
    // 1. Si no hay nada seleccionado, mostramos TODO
    if (selectedTags.length === 0) return true;

    // 2. Separamos si "FIBRA" está seleccionado del resto de tags
    const isFibraSelected = selectedTags.includes('FIBRA');
    const otherTags = selectedTags.filter(tag => tag !== 'FIBRA');

    // PASO A: El filtro "Jefe". Si FIBRA está marcado, el proyecto TIENE que ser FIBRA.
    if (isFibraSelected && project.group !== 'FIBRA') {
        return false; // Si no es fibra, fuera.
    }

    // PASO B: El resto de etiquetas funcionan como "OR" (O una O la otra).
    if (otherTags.length > 0) {
        const hasMatchingTag = otherTags.some(tag => project.tags.includes(tag));
        if (!hasMatchingTag) {
            return false;
        }
    }

    return true;
  });

  const heroProject = allFiltered.find(p => p.isFibraParent);
  const gridProjects = allFiltered.filter(p => !p.isFibraParent);

  // --- 2. FUNCIONES ---
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 pt-0 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* BOTÓN FIBRA */}
            <button
                onClick={() => toggleTag('FIBRA')}
                className={`
                px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border border-black
                ${selectedTags.includes('FIBRA') 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black hover:bg-gray-100'}
                `}
            >
                FIBRA
            </button>

            <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block"></div>

            <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map((tag) => {
                    if (tag === 'FIBRA') return null; 
                    
                    const isActive = selectedTags.includes(tag);
                    const displayLabel = t.tags[tag] || tag; 

                    return (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`
                        px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border
                        ${isActive 
                            ? 'bg-black text-white border-black' 
                            : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'}
                        `}
                    >
                        {displayLabel}
                    </button>
                    );
                })}
            </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 1. HERO ZONE (FIBRA PADRE) */}
      {/* ========================================== */}
      {heroProject && (
        <div className="w-full mb-4 px-4 md:px-8 mt-4 animate-fadeIn">
            <Link 
                href={`/proyectos/${heroProject.slug}`} 
                className="block relative group rounded-sm h-[50vh] md:h-[70vh] w-full bg-gray-100 overflow-hidden"
            >
                {heroProject.gridVideo ? (
                    <video 
                        src={heroProject.gridVideo} 
                        autoPlay loop muted playsInline 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img 
                        src={heroProject.image} 
                        alt={heroProject.title[language]} // <--- IMPORTANTE: [language]
                        className="w-full h-full object-cover" 
                    />
                )}
                
                <div className="absolute inset-0 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    <div className="bg-white px-8 py-6 border-b border-gray-100 flex justify-between items-center w-full">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                                {language === 'es' ? 'Proyecto Destacado' : 'Featured Project'}
                            </span>
                            <h2 className="text-black text-2xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                                {heroProject.title[language]} {/* <--- IMPORTANTE: [language] */}
                            </h2>
                        </div>
                        <span className="text-3xl text-black">→</span>
                    </div>
                </div>
            </Link>
        </div>
      )}

      {/* ========================================== */}
      {/* 2. MASONRY ZONE (RESTO DE PROYECTOS) */}
      {/* ========================================== */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-4 md:px-8 pb-12">
        
        {gridProjects.map((project) => (
          <Link 
            href={`/proyectos/${project.slug}`} 
            key={project.id}
            className="block break-inside-avoid relative group rounded-sm border border-gray-100 bg-gray-50 overflow-hidden"
          >
            {project.gridVideo ? (
                <video 
                    src={project.gridVideo} 
                    autoPlay loop muted playsInline 
                    className="w-full h-auto block"
                />
            ) : (
                <img 
                    src={project.image} 
                    alt={project.title[language]} // <--- IMPORTANTE
                    className="w-full h-auto object-contain block"
                />
            )}

            <div className="absolute inset-0 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white px-5 py-4 border-b border-gray-50 flex justify-between items-center w-full shadow-sm">
                    <div className="flex flex-col">
                        {project.isFibraChild && (
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                                FIBRA
                            </span>
                        )}
                        <h2 className="text-black text-lg font-bold uppercase tracking-wide leading-none">
                            {project.title[language]} {/* <--- IMPORTANTE */}
                        </h2>
                    </div>
                    <span className="text-black text-xl">→</span>
                </div>
            </div>

          </Link>
        ))}

      </div>

      {/* MENSAJE VACÍO */}
      {allFiltered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 font-mono">
            {t.home.empty}
          </p>
          <button 
            onClick={() => setSelectedTags([])} 
            className="mt-4 text-sm font-bold underline hover:text-gray-600"
          >
            {t.home.clear}
          </button>
        </div>
      )}

    </div>
  );
}