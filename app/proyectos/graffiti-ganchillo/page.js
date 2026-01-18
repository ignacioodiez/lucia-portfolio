// src/app/proyectos/residencias-tiza/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function GrafittiPage() {
  const project = projects.find(p => p.slug === 'graffiti-ganchillo');

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
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors "
        >
            ← Volver
        </Link>
      </div>

      {/* 2. BLOQUE SUPERIOR (TEXTO MANDA, FOTO OBDECE) */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 relative">
        
        {/* COLUMNA IZQUIERDA: FOTO 2 */}
        {/* En móvil: block normal (w-full h-auto).
            En escritorio: 'absolute' (se adapta a la altura del padre, que la define el texto). */}
        

        {/* COLUMNA DERECHA: TEXTO */}
        {/* Este div es el que define la altura real del bloque en escritorio */}
        <div className="w-full md:w-3/4 flex flex-col justify-center">
          <div className="w-full"> 
            
            <div className="mb-8 border-b border-black pb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                {project.title}
                </h1>
                 <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono">
            <span className="text-black">
                {project.categories ? project.categories.join(' / ') : 'Sin categoría'}
            </span>
            <span>—</span>
            <span>{project.year}</span>
        </div>
            </div>

            <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-8 max-w-none">
                <p>{project.description}</p>
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