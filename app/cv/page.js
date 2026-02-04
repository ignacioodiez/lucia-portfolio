"use client"; 

import { useLanguage } from '../../context/LanguageContext'; 
import { translations } from '../../data/translations'; // Ahora leemos de aquí

export default function CVPage() {
  const { language } = useLanguage();
  const t = translations[language]; // Cargamos 'es' o 'en'
  const cv = t.cv; // Atajo para no escribir t.cv.education... todo el rato

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      
      {/* HEADER */}
      <header className="mb-16 border-b border-black pb-8">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Curriculum Vitae</h1>
        <p className="text-xl text-gray-500">
           {cv.header.role}
        </p>
      </header>

      {/* SECCIÓN 1: EDUCACIÓN */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
            {cv.education.title}
        </h2>
        <div className="space-y-6">
          {cv.education.items.map((item, index) => (
             <CVItem 
                key={index}
                year={item.year} 
                title={item.title} 
                place={item.place} 
             />
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: EXPERIENCIA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
            {cv.experience.title}
        </h2>
        <div className="space-y-6">
          {cv.experience.items.map((item, index) => (
             <CVItem 
                key={index}
                year={item.year} 
                title={item.title} 
                place={item.place} 
             />
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: MÉRITOS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">
            {cv.merits.title}
        </h2>
        <div className="space-y-6">
          {cv.merits.items.map((item, index) => (
             <CVItem 
                key={index}
                year={item.year} 
                title={item.title} 
                place={item.place} 
             />
          ))}
        </div>
      </section>
      
    </div>
  );
}

// COMPONENTE AUXILIAR (Igual que antes)
function CVItem({ year, title, place }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 group">
      {/* Año */}
      <div className="md:w-32 flex-shrink-0">
        <span className="text-sm font-mono text-gray-500 group-hover:text-black transition-colors">
          {year}
        </span>
      </div>
      
      {/* Contenido */}
      <div>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-gray-600 italic mt-1">{place}</p>
      </div>
    </div>
  );
}