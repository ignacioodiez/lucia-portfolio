// src/app/proyectos/borda-palestina/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function BordaPalestinaPage() {
  const project = projects.find(p => p.slug === 'borda-palestina');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors "
        >
            ← Volver
        </Link>
      </div>

      {/* 2. CABECERA */}
      <div className="w-full mb-16 border-b border-black pb-8">
            
            <Link 
                href="/proyectos/colectivo-fibra"
                className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
            >
                 ☆ Proyecto parte de Colectivo FIBRA☆
            </Link>
            {/* ... TITULO ANTERIOR ... */}
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
            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
                <p>{project.description}</p>
            </div>

          
      </div>

      {/* 3. GALERÍA CENTRADA (FLEX) */}
      {/* justify-center: Empuja todo al medio horizontalmente */}
      {/* items-start: Alinea arriba (por si una foto es más alta que la otra) */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full">
          
          {project.gallery?.map((img, index) => (
            <div key={index} className="max-w-xl w-full">
                <img 
                    src={img} 
                    alt={`Detalle Borda Palestina ${index + 1}`} 
                    className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300 "
                />
            </div>
          ))}

      </div>

    </div>
  );
}