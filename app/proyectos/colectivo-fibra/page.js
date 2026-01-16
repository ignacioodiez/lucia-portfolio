// src/app/proyectos/colectivo-fibra/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function FibraPage() {
  const project = projects.find(p => p.slug === 'colectivo-fibra');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-20 flex flex-col">
      
      {/* 1. BOTÓN VOLVER (Consistente) */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors border border-gray-200 px-4 py-2 rounded-full"
        >
            ← Volver
        </Link>
      </div>

      {/* 2. CABECERA MADRE (COLECTIVO FIBRA) */}
      {/* Mismo estilo que Caries de Plata */}
      <div className="w-full max-w-none mb-24 border-b border-black pb-12">
        <div className="mb-10">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-none uppercase">
                {project.title}
            </h1>
            <div className="flex justify-between items-end text-sm font-mono text-gray-500">
                <span className="text-black uppercase tracking-wider text-lg">
                    {project.categories.join(' + ')}
                </span>
                <span className="text-black font-bold text-2xl">
                    {project.year}
                </span>
            </div>
        </div>

        <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-10 max-w-4xl">
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

      {/* 3. LOS SUBPROYECTOS (LOOP) */}
      <div className="flex flex-col gap-32">
        
        {project.subprojects?.map((sub, index) => (
          <div key={index} className="w-full">
            
            {/* TÍTULO DEL CAPÍTULO (Sticky: Se pega arriba al hacer scroll) */}
            <div className="sticky top-0 z-10 bg-white py-6 border-t border-black mb-8 flex items-baseline justify-between">
                <h2 className="text-3xl md:text-5xl font-bold uppercase">
                    <span className="text-gray-300 mr-4">0{index + 1}.</span>
                    {sub.title}
                </h2>
                <span className="font-mono font-bold text-lg hidden md:block">{sub.year}</span>
            </div>

            {/* CONTENIDO DEL CAPÍTULO: 2 COLUMNAS */}
            <div className="flex flex-col md:flex-row gap-12">
                
                {/* COLUMNA IZQ: TEXTO (40%) */}
                <div className="w-full md:w-5/12">
                    <div className="prose text-gray-600 whitespace-pre-line sticky top-32">
                        <p>{sub.description}</p>
                        
                        {/* Tags del subproyecto */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {sub.tags?.map(tag => (
                                <span key={tag} className="border border-gray-200 text-gray-500 px-2 py-1 text-xs uppercase tracking-widest font-bold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* COLUMNA DER: FOTOS (60%) */}
                <div className="w-full md:w-7/12 grid grid-cols-1 gap-4">
                    {sub.gallery?.map((img, i) => (
                         <div key={i} className="w-full">
                            <img 
                                src={img} 
                                alt={`${sub.title} ${i}`} 
                                // object-cover y w-full para que llenen el ancho de la columna
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                         </div>
                    ))}
                </div>

            </div>

          </div>
        ))}

      </div>

      {/* CIERRE */}
      <div className="mt-32 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm uppercase tracking-widest">
        Fin de los proyectos del {project.title}
      </div>

    </div>
  );
}