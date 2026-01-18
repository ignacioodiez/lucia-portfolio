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
                 ☆ Proyecto parte de Colectivo FIBRA  ☆
            </Link>
            
            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                {project.title}
            </h1>
        
          {/* AÑADIDO: 'mb-12' para separar esto del parrafo de abajo */}
          <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono mb-12">
            <span className="text-black">
                {project.categories ? project.categories.join(' / ') : 'Sin categoría'}
            </span>
            <span>—</span>
            <span>{project.year}</span>
        </div>

            {/* AHORA SÍ HABRÁ ESPACIO AQUÍ */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line  max-w-none">
                <p>{project.description}</p>
            </div>


            {/* Descripción */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line max-w-none mb-8">
                <p>{project.description}</p>
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