// app/proyectos/[slug]/page.js
import Link from 'next/link';
import { projects } from '../../../data/projects'; // Subimos 3 niveles para encontrar la data

export default async function ProjectDetail({ params }) {
  // 1. "Desempaquetamos" el slug de la URL (ej: 'neon-nights')
  const { slug } = await params; 
  
  // 2. Buscamos en nuestra lista el proyecto que coincida
  const project = projects.find((p) => p.slug === slug);

  // 3. Si alguien pone una url inventada, le decimos que no existe
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Proyecto no encontrado 😢</h1>
        <Link href="/proyectos" className="text-blue-500 hover:underline mt-4">
          Volver a la galería
        </Link>
      </div>
    );
  }

  // 4. Si existe, mostramos el diseño
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      {/* Botón Volver */}
      <Link href="/proyectos" className="text-sm text-gray-500 hover:text-black mb-6 inline-block">
        ← Volver a proyectos
      </Link>

      {/* Título y Categoría */}
      <h1 className="text-4xl md:text-6xl font-bold mb-2 uppercase">{project.title}</h1>
        <p className="text-xl text-gray-500 mb-8">
            {project.categories ? project.categories.join(', ') : 'Sin categoría'} — {project.year || "2026"}
        </p>
      {/* Imagen Principal */}
      <div className="w-full bg-gray-100 mb-8 rounded-lg overflow-hidden shadow-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-contain max-h-[80vh]"
        />
      </div>

      {/* Descripción */}
      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg leading-relaxed text-gray-800">
            {project.description || "Aquí iría la descripción detallada de la obra, la técnica utilizada, la inspiración detrás del proyecto y cualquier otro detalle que tu chica quiera contar sobre esta pieza."}
        </p>
      </div>
    </div>
  );
}