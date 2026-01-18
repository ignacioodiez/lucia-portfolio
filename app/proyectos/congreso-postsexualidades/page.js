// src/app/proyectos/congreso-postsexualidades/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function PostsexualidadesPage() {
  const project = projects.find(p => p.slug === 'congreso-postsexualidades');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER (Estilo limpio) */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
            ← Volver
        </Link>
      </div>

      {/* 2. CABECERA (Estilo consistente FIBRA) */}
      <div className="w-full mb-12 border-b border-black pb-8">
            
            {/* BADGE FIBRA */}
            <Link 
                href="/proyectos/colectivo-fibra"
                className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
            >
                 ☆ Proyecto parte de Colectivo FIBRA☆
            </Link>
            
            {/* TÍTULO */}
            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                {project.title}
            </h1>
            
            {/* METADATOS (Categorías y Año) */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono mb-12">
                <span className="text-black">
                    {project.categories ? project.categories.join(' / ') : 'Sin categoría'}
                </span>
                <span>—</span>
                <span>{project.year}</span>
            </div>

            {/* DESCRIPCIÓN */}
            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
                <p>{project.description}</p>
            </div>
      </div>

      {/* 3. GALERÍA TIPO PINTEREST (Masonry) */}
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