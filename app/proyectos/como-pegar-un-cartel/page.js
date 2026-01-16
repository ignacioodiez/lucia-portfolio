// src/app/proyectos/como-pegar-un-cartel/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function CartelPage() {
  const project = projects.find(p => p.slug === 'como-pegar-un-cartel');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white">
      
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        {/* Quitamos todos los paddings para aprovechar cada pixel */}
        <div className="w-full md:w-1/2 bg-white relative flex items-center justify-center">
          
          <Link 
            href="/" 
            className="absolute top-6 left-6 z-10 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
             ← Volver
          </Link>

          {/* Contenedor Sticky */}
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            
            {/* AQUÍ ESTÁ EL CAMBIO: */}
            {/* En vez de {project.image}, ponemos la ruta fija de la vertical */}
            <img 
              src="/img/cartel/FOTO1.jpg" 
              alt={project.title} 
              className="max-h-screen w-auto object-contain shadow-lg" 
            />
            
          </div>
        </div>

        {/* COLUMNA DERECHA: TEXTO (Sin cambios) */}
        <div className="w-full md:w-1/2 flex items-center bg-white">
          <div className="p-8 md:p-24 max-w-2xl">
            
            <div className="mb-10 border-b border-black pb-6">
                <h1 className="text-5xl font-bold mb-4 leading-tight uppercase">
                {project.title}
                </h1>
                <div className="flex justify-between items-end text-sm font-mono text-gray-500">
                    <span>{project.categories.join(' + ')}</span>
                    <span className="text-black font-bold text-xl">{project.year}</span>
                </div>
            </div>

            <div className="prose prose-lg text-gray-800 whitespace-pre-line mb-10">
                <p>{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="border border-black px-3 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}