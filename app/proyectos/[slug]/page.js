// src/app/proyectos/[slug]/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; 

export default async function ProjectDetail({ params }) {
  const { slug } = await params; 
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
        <Link href="/" className="text-blue-500 hover:underline mt-4">Volver al inicio</Link>
      </div>
    );
  }

  // --- LÓGICA NUEVA: SEPARAMOS EL BANNER DEL RESTO ---
  // 1. Buscamos la imagen que tenga "5940" en el nombre
  const bannerImage = project.gallery?.find(img => img.includes('5940'));
  
  // 2. Creamos una lista con EL RESTO de imágenes (excluyendo el banner para no repetir)
  // Si no hay banner, mostramos todas abajo.
  const galleryImages = project.gallery?.filter(img => !img.includes('5940')) || [];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      
      {/* BOTÓN VOLVER */}
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">
          ← Volver
        </Link>
      </div>

      {/* ENCABEZADO (TÍTULO Y DATOS) */}
      <header className="mb-8 border-b border-gray-100 pb-8">
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

       
      </header>

      {/* --- AQUÍ VA EL BANNER (Si existe) --- */}
      {/* Lo ponemos justo después del header y antes de la descripción */}
      {bannerImage && (
        <div className="w-full mb-12">
            <img 
                src={bannerImage} 
                alt="Vista principal del proyecto" 
                className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
        </div>
      )}

      {/* DESCRIPCIÓN */}
      <div className="prose prose-lg max-w-none mb-16 text-gray-800 whitespace-pre-line">
        <p>{project.description}</p>
      </div>

      {/* GALERÍA DEL RESTO DE IMÁGENES */}
      {galleryImages.length > 0 && (
        <section className="space-y-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-2">
           
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                {galleryImages.map((imgSrc, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center col-span-1"
                    >
                        <img 
                            src={imgSrc} 
                            alt={`${project.title} - detalle ${index + 1}`} 
                            className="w-full h-auto object-contain hover:opacity-95 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
      )}

      {/* FALLBACK: Si no hay galería ni banner, muestra la imagen de portada */}
      {(!project.gallery || project.gallery.length === 0) && (
         <div className="w-full mb-12">
            <img src={project.image} alt={project.title} className="w-full h-auto object-contain"/>
         </div>
      )}

    </div>
  );
}