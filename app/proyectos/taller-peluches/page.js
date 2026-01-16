// src/app/proyectos/taller-peluches/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function PeluchesPage() {
  const project = projects.find(p => p.slug === 'taller-peluches');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors border border-gray-200 px-4 py-2 rounded-full"
        >
            ← Volver
        </Link>
      </div>

      {/* 2. CABECERA (Consistente con los demás proyectos) */}
      <div className="w-full mb-16 border-b border-black pb-8">
            
            {/* DISCLAIMER FIBRA (Porque isFibraChild: true) */}
            <Link 
                href="/proyectos/colectivo-fibra"
                className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
            >
                ← Proyecto parte de Colectivo FIBRA
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
                {project.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                {/* Categorías y Año alineados */}
                 <div className="flex justify-between items-end w-full text-sm font-mono text-gray-500">
                    <span className="text-black uppercase tracking-wider text-lg">
                        {project.categories.join(' + ')}
                    </span>
                    <span className="text-black font-bold text-2xl">
                        {project.year}
                    </span>
                </div>
            </div>

            {/* Descripción */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line max-w-none mb-8">
                <p>{project.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-2 text-sm font-bold uppercase rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>
      </div>

      {/* 3. GALERÍA TIPO PINTEREST (MASONRY) */}
      {/* columns-1 (móvil), columns-2 (tablet), columns-3 (escritorio) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          
          {project.gallery?.map((img, index) => (
            <div key={index} className="break-inside-avoid mb-4">
                <img 
                    src={img} 
                    alt={`Detalle peluche ${index + 1}`} 
                    // w-full + h-auto: La imagen mantiene su proporción original (no se recorta)
                    className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300"
                />
            </div>
          ))}

      </div>

    </div>
  );
}