// src/app/proyectos/caries-de-plata/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function CariesPage() {
  const project = projects.find(p => p.slug === 'caries-de-plata');

  if (!project) return <div>Proyecto no encontrado</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 pb-0 md:pb-0 flex flex-col">
      
      {/* 1. BOTÓN VOLVER */}
      {/* Mantenemos el estilo de botón independiente arriba para no tapar nada */}
      <div className="mb-8">
        <Link 
            href="/" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
        >
            ← Volver
        </Link>
      </div>

      {/* --- 2. CABECERA Y TEXTO (COPIADO EXACTO DEL OTRO PROYECTO) --- */}
      <div className="w-full max-w-none mb-12">
        
        {/* TÍTULO Y META DATOS (Igual que en Telar) */}
        <div className="mb-10 border-b border-black pb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
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

        {/* DESCRIPCIÓN */}
        <div className="prose prose-xl text-gray-800 whitespace-pre-line mb-12 max-w-none">
            <p>{project.description}</p>
        </div>

        {/* TAGS (Estilo pastilla gris) */}
        

      </div>

      {/* --- 3. BLOQUE VÍDEO + FOTOS (MANTENIENDO LO QUE YA FUNCIONABA) --- */}
      <div 
        className="flex flex-col md:flex-row w-full gap-4 md:gap-0 mt-8"
        style={{ minHeight: '600px' }} 
      >
        
        {/* IZQUIERDA: VÍDEO */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-white relative">
            <video 
                src={project.video}
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full "
            />
        </div>

        {/* DERECHA: GRID DE 6 FOTOS (FONDO BLANCO, SIN BORDES) */}
        <div 
            className="w-full md:w-1/2 h-[300px] md:h-auto bg-white relative"
            style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gridTemplateRows: 'repeat(2, 1fr)',
            }}
        >
            {project.gallery.slice(0, 6).map((foto, index) => (
                <div key={index} className="relative w-full h-full overflow-hidden"> 
                    <img 
                        src={foto} 
                        alt={`Cara ${index + 1}`} 
                        className="absolute inset-0 w-full h-full object-contain block p-2" 
                    />
                </div>
            ))}
        </div>

      </div>

    </div>
  );
}