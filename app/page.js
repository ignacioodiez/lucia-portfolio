// app/page.js
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Home() {
  const [selectedTags, setSelectedTags] = useState([]);

  // Sacamos los tags únicos
  const allTags = useMemo(() => {
    const tags = projects.flatMap(p => p.tags);
    return [...new Set(tags)].sort();
  }, []);

  // Función para activar/desactivar botones
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // --- EL CAMBIO ESTÁ AQUÍ ---
  const filteredProjects = projects.filter((project) => {
    // 1. Si no hay nada seleccionado, muéstralo todo
    if (selectedTags.length === 0) return true; 
    
    // 2. Lógica "OR" (O una cosa O la otra)
    // .some() comprueba si el proyecto tiene AL MENOS UNA de las etiquetas seleccionadas
    return selectedTags.some(tag => project.tags.includes(tag));
  });

  return (
    <div className="container mx-auto">
      
      {/* HEADER DE FILTROS */}
      <div className="flex flex-col items-center mb-12 space-y-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {allTags.map((tag) => {
            const isActive = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all border
                  ${isActive 
                    ? 'bg-black text-white border-black shadow-md' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-black'}
                `}
              >
                {tag} {}
              </button>
            );
          })}
        </div>

      
      </div>

      {/* REJILLA DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {filteredProjects.map((project) => (
          <Link 
            key={project.id} 
            href={`/proyectos/${project.slug}`}
            className="group block"
          >
            <div className="relative overflow-hidden aspect-square bg-gray-100 mb-4 rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
               <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold rounded shadow-sm">
                {project.year}
              </div>
            </div>
            
            <h3 className="text-lg font-bold group-hover:underline">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  // Truco visual: Si la etiqueta está seleccionada en el filtro, la pintamos de negro también aquí
                  className={`text-xs px-2 py-1 rounded ${selectedTags.includes(tag) ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}

      </div>

      {/* MENSAJE SI NO HAY RESULTADOS */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No hay proyectos.</p>
        </div>
      )}

    </div>
  );
}