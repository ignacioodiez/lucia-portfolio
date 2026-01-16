// src/app/proyectos/residencias-tiza/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function ResidenciasPage() {
  const project = projects.find(p => p.slug === 'residencias-tiza');

  if (!project) return <div>Proyecto no encontrado</div>;

  // REVISA TU PROJECTS.JS:
  // imgSide = Foto 2 (La que irá al lado del texto)
  // imgBottom = Foto 1 (La grande de abajo)
  const imgSide = project.gallery?.[1]; 
  const imgBottom = project.gallery?.[0] || project.image;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      
      {/* 1. BOTÓN VOLVER (Arriba del todo, limpio) */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors border border-gray-200 px-4 py-2 rounded-full"
        >
            ← Volver
        </Link>
      </div>

      {/* 2. BLOQUE SUPERIOR (TEXTO MANDA, FOTO OBDECE) */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 relative">
        
        {/* COLUMNA IZQUIERDA: FOTO 2 */}
        {/* En móvil: block normal (w-full h-auto).
            En escritorio: 'absolute' (se adapta a la altura del padre, que la define el texto). */}
        <div className="w-full md:w-1/4 relative min-h-[300px] md:min-h-0">
            <img 
              src={imgSide} 
              alt="Detalle lateral" 
              className="w-full h-full object-cover rounded-sm md:absolute md:top-0 md:left-0" 
            />
        </div>

        {/* COLUMNA DERECHA: TEXTO */}
        {/* Este div es el que define la altura real del bloque en escritorio */}
        <div className="w-full md:w-3/4 flex flex-col justify-center">
          <div className="w-full"> 
            
            <div className="mb-8 border-b border-black pb-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight uppercase">
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

            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-8 max-w-none">
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
        </div>

      </div>

      {/* 3. FOTO GRANDE ABAJO */}
      <div className="w-full">
         <img 
            src={imgBottom} 
            alt="Vista general" 
            className="w-full h-auto block rounded-sm"
         />
      </div>

    </div>
  );
}