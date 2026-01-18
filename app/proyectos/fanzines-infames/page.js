// src/app/proyectos/fanzines-infames/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function FanzinesInfamesPage() {
  // 1. BUSCAMOS EL PROYECTO CORRECTO
  const project = projects.find(p => p.slug === 'fanzines-infames');

  if (!project) return <div>Proyecto no encontrado</div>;

  // 2. DEFINIMOS LA FOTO LATERAL
  // He puesto la [0] por defecto. Si quieres la [5] como en el otro, cambia el 0 por un 5.
  const imgSide = project.gallery?.[5] || project.image; 

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- PARTE SUPERIOR (Split) --- */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* IZQUIERDA: FOTO FIJA */}
        <div className="md:w-2/4 bg-white relative flex items-center justify-center">
         
         
          <div className="sticky top-0 h-screen w-full flex items-center justify-center p-0">
            {imgSide && (
                <img 
                src={imgSide} 
                alt="Portada lateral" 
                className="h-full w-full object-cover" 
                />
            )}
          </div>
        </div>

        {/* DERECHA: TEXTO (ESTILO FIBRA) */}
        <div className="w-full md:w-3/4 flex items-center bg-white">
         
          <div className="p-8 md:p-12 md:pr-24 w-full"> 
            
            {/* CABECERA ESTILO FIBRA */}
            <div className="mb-10 border-b border-black pb-6">
               
                {/* 1. BADGE FIBRA */}
                <div className="mb-8">
                <Link 
                    href="/" 
                    className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
                >
                    ← Volver
                </Link>
            </div>
                <Link 
                    href="/proyectos/colectivo-fibra"
                    className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition-colors"
                >
                     ☆ Proyecto parte de Colectivo FIBRA☆
                </Link>

                {/* 2. TÍTULO EN MAYÚSCULAS Y FUERTE */}
                <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight uppercase">
                    {project.title}
                </h1>

                {/* 3. METADATOS CON MARGEN AMPLIO (mb-12) */}
                <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-500 font-mono mb-12">
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

          </div>
        </div>

      </div>

   {/* --- PARTE INFERIOR (LAYOUT HÍBRIDO 3+2 - TODO FLEX) --- */}
      <div className="space-y-4 p-4 md:p-0">
          
          {/* 1. FILA DE ARRIBA (Las 3 primeras) */}
          {/* Usamos FLEX igual que abajo para obligar a que se pongan horizontales */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {project.gallery?.slice(0, 3).map((img, index) => (
                <div key={`top-${index}`} className="w-full md:w-1/3">
                    <img 
                        src={img} 
                        alt={`Detalle fanzine ${index + 1}`} 
                        className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300 object-cover"
                    />
                </div>
            ))}
          </div>

          {/* 2. FILA DE ABAJO (Las 2 últimas) - CENTRADAS */}
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            {project.gallery?.slice(3, 5).map((img, index) => (
                // w-full md:w-1/3 asegura que midan lo mismo que las de arriba
                <div key={`bottom-${index}`} className="w-full md:w-1/3">
                    <img 
                        src={img} 
                        alt={`Detalle fanzine ${index + 4}`} 
                        className="w-full h-auto rounded-sm hover:opacity-95 transition-opacity duration-300 object-cover"
                    />
                </div>
            ))}
          </div>

      </div>
    </div>
  );
}