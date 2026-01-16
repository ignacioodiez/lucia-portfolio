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
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors border border-gray-200 px-4 py-2 rounded-full"
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
                ← Proyecto parte de Colectivo FIBRA
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
                {project.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                 <div className="flex justify-between items-end w-full text-sm font-mono text-gray-500">
                    <span className="text-black uppercase tracking-wider text-lg">
                        {project.categories.join(' + ')}
                    </span>
                    <span className="text-black font-bold text-2xl">
                        {project.year}
                    </span>
                </div>
            </div>

            <div className="prose prose-xl text-gray-800 whitespace-pre-line max-w-none mb-8">
                <p>{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-2 text-sm font-bold uppercase rounded-full">
                        #{tag}
                    </span>
                ))}
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