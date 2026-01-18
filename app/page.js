// src/app/page.js
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {
  const [filterMode, setFilterMode] = useState('ALL'); 
  const [selectedTags, setSelectedTags] = useState([]);

  // --- 1. PREPARAR DATOS ---
  const allTags = useMemo(() => {
    const tags = projects.flatMap(p => p.tags);
    return [...new Set(tags)].sort();
  }, []);

  const allFiltered = projects.filter((project) => {
    if (filterMode === 'FIBRA') return project.group === 'FIBRA';
    if (selectedTags.length === 0) return true;
    return selectedTags.some(tag => project.tags.includes(tag));
  });

  const heroProject = allFiltered.find(p => p.isFibraParent);
  const gridProjects = allFiltered.filter(p => !p.isFibraParent);

  // --- 2. FUNCIONES ---
  const toggleTag = (tag) => {
    setFilterMode('ALL');
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const activateFibra = () => {
    if (filterMode === 'FIBRA') {
        setFilterMode('ALL');
    } else {
        setFilterMode('FIBRA');
        setSelectedTags([]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 pt-4 pb-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
            
            <button
                onClick={activateFibra}
                className={`
                px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border border-black
                ${filterMode === 'FIBRA' 
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
                        {tag}
                    </button>
                    );
                })}
            </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 1. ZONA HERO (FIBRA PADRE) */}
      {/* ========================================== */}
      {heroProject && (
        <div className="w-full mb-4 px-4 md:px-8 mt-4 animate-fadeIn">
            <Link 
                href={`/proyectos/${heroProject.slug}`} 
                className="block relative group rounded-sm h-[50vh] md:h-[70vh] w-full bg-gray-100 overflow-hidden"
            >
                {/* LÓGICA VÍDEO vs FOTO */}
                {heroProject.gridVideo ? (
                    <video 
                        src={heroProject.gridVideo} 
                        autoPlay loop muted playsInline 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img 
                        src={heroProject.image} 
                        alt={heroProject.title} 
                        className="w-full h-full object-cover" 
                    />
                )}
                
                {/* CAPA FANTASMA (HOVER) */}
                <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    <div className="bg-white px-8 py-6 border-t border-gray-100 flex justify-between items-center w-full">
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                                Proyecto Destacado
                            </span>
                            <h2 className="text-black text-2xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                                {heroProject.title}
                            </h2>
                        </div>
                        <span className="text-3xl text-black">→</span>
                    </div>
                </div>
            </Link>
        </div>
      )}

      {/* ========================================== */}
      {/* 2. ZONA MASONRY (RESTO DE PROYECTOS) */}
      {/* ========================================== */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-4 md:px-8 pb-12">
        
        {gridProjects.map((project) => (
          <Link 
            href={`/proyectos/${project.slug}`} 
            key={project.id}
            className="block break-inside-avoid relative group rounded-sm border border-gray-100 bg-gray-50 overflow-hidden"
          >
            {/* LÓGICA VÍDEO vs FOTO */}
            {project.gridVideo ? (
                <video 
                    src={project.gridVideo} 
                    autoPlay loop muted playsInline 
                    // Usamos object-contain o cover según prefieras, aquí mantengo el estilo masonry
                    className="w-full h-auto block"
                />
            ) : (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-contain block"
                />
            )}

            {/* CAPA FANTASMA (HOVER) */}
            <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white px-5 py-4 border-t border-gray-50 flex justify-between items-center w-full shadow-sm">
                    <div className="flex flex-col">
                        {project.isFibraChild && (
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                                FIBRA
                            </span>
                        )}
                        <h2 className="text-black text-lg font-bold uppercase tracking-wide leading-none">
                            {project.title}
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
          <p className="text-gray-400 font-mono">No hay proyectos.</p>
          <button 
            onClick={() => { setFilterMode('ALL'); setSelectedTags([]); }}
            className="mt-4 text-sm font-bold underline hover:text-gray-600"
          >
            Limpiar filtros
          </button>
        </div>
      )}

    </div>
  );
}