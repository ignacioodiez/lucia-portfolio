// src/app/proyectos/congreso-postsexualidades/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default function PostsexualidadesPage() {
  const project = projects.find(p => p.slug === 'congreso-postsexualidades');

  if (!project) return <div>Proyecto no encontrado</div>;

  const gallery = project.gallery || [];
  // Aseguramos que haya 4 fotos, si falta alguna no peta
  const foto1 = gallery[0];
  const foto2 = gallery[1];
  const foto3 = gallery[2];
  const foto4 = gallery[3];

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
      <div className="w-full mb-12 border-b border-black pb-8">
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

      {/* 3. GALERÍA GRID 2x2 FORZADO */}
      {/* Usamos 'style' directo para que Tailwind no se lie */}
      <div 
        className="w-full max-w-6xl mx-auto gap-2 md:gap-4 bg-gray-50"
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr', // 2 Columnas iguales (50% 50%)
            gridTemplateRows: '1fr 1fr',    // 2 Filas iguales (50% 50%)
            height: '80vh',                 // Altura del 80% de la pantalla
            minHeight: '600px'              // Mínimo 600px para que no se aplaste
        }}
      >

          {/* FOTO 1: Arriba Izquierda */}
          <div className="relative w-full h-full overflow-hidden group bg-gray-200">
             {foto1 && (
                <img 
                    src={foto1} 
                    alt="Foto 1" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
             )}
          </div>

          {/* FOTO 2: Arriba Derecha */}
          <div className="relative w-full h-full overflow-hidden group bg-gray-200">
             {foto2 && (
                <img 
                    src={foto2} 
                    alt="Foto 2" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
             )}
          </div>

          {/* FOTO 3: Abajo Izquierda */}
          <div className="relative w-full h-full overflow-hidden group bg-gray-200">
             {foto3 && (
                <img 
                    src={foto3} 
                    alt="Foto 3" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
             )}
          </div>

          {/* FOTO 4: Abajo Derecha */}
          <div className="relative w-full h-full overflow-hidden group bg-gray-200">
             {foto4 && (
                <img 
                    src={foto4} 
                    alt="Foto 4" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
             )}
          </div>

      </div>

    </div>
  );
}