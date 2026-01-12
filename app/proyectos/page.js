// app/proyectos/page.js
import Link from 'next/link';
import { projects } from '../../data/projects'; // Importamos los datos

export default function ProjectsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Obras Seleccionadas</h1>
      
      {/* GRILLA DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/proyectos/${project.slug}`}
            className="group block" // 'group' sirve para animar cosas al hacer hover
          >
            {/* Contenedor de la imagen */}
            <div className="relative overflow-hidden aspect-square bg-gray-100 mb-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Textos */}
            <h3 className="text-lg font-bold group-hover:underline">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {project.category}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}