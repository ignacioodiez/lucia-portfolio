// app/cv/page.js
export default function CVPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      
      {/* HEADER */}
      <header className="mb-16 border-b border-black pb-8">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Curriculum Vitae</h1>
        <p className="text-xl text-gray-500">
          Artista Visual & Investigadora
        </p>
      </header>

      {/* SECCIÓN 1: EDUCACIÓN */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">Academic Background</h2>
        <div className="space-y-6">
          <CVItem 
            year="2025 – 2026" 
            title="MA in Art History and Visual Culture" 
            place="National Art Museum Reina Sofia (SP)" 
          />
          <CVItem 
            year="2025 – 2026" 
            title="Course in Web Development" 
            place="University Complutense of Madrid (SP)" 
          />
          <CVItem 
            year="2020 – 2025" 
            title="BA in Fine Arts" 
            place="University Complutense of Madrid (SP)" 
          />
          <CVItem 
            year="2022 – 2023" 
            title="Exchange Program during BA – 1 year" 
            place="University of California, Berkeley (USA)" 
          />
          <CVItem 
            year="2023" 
            title="Course in Cultural Management" 
            place="University Complutense of Madrid (SP)" 
          />
          <CVItem 
            year="2022" 
            title="Course in Textile Arts" 
            place="Julia´s Textile Laboratory (SP)" 
          />
        </div>
      </section>

      {/* SECCIÓN 2: EXPERIENCIA */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">Professional Background</h2>
        <div className="space-y-6">
          <CVItem 
            year="2025 – Now" 
            title="Investigator on Editorial Projects" 
            place="National Art Museum Reina Sofia (SP)" 
          />
          <CVItem 
            year="2025 – Now" 
            title="Member of FUGA – Young Artists Investigation Group" 
            place="Museum CA2M (SP)" 
          />
          <CVItem 
            year="2025" 
            title="Curator of Pull the Thread – BA Degree Show" 
            place="Exhibition Hall Fine Arts Faculty (SP)" 
          />
          <CVItem 
            year="2025" 
            title="Resident at TIZA – Pedagogic Art Residency" 
            place="Francisco Umbral High School (SP)" 
          />
          <CVItem 
            year="2025" 
            title="Painting Professor" 
            place="GSD Education Cooperative (SP)" 
          />
          <CVItem 
            year="2023 – 2025" 
            title="Founder of FIBRA – Textile Art Collective" 
            place="(SP)" 
          />
          <CVItem 
            year="2023 – 2025" 
            title="Cultural Assistant" 
            place="University of California Student Abroad Program (USA / SP)" 
          />
          <CVItem 
            year="2024" 
            title="Resident at Radiantes – Art Residency" 
            place="Nomadic Art Research Center Fabero (SP)" 
          />
          <CVItem 
            year="2024" 
            title="Lecturer at Postsexualities – Art Congress" 
            place="Fine Arts Faculty (SP)" 
          />
          <CVItem 
            year="2023" 
            title="Fashion Designer in Metamorphosis – FAST Runway Show" 
            place="UC Berkeley (USA)" 
          />
           <CVItem 
            year="2023" 
            title="Art Assistant at Happy: Jorge Pineda Essays" 
            place="C Arte C Center (SP)" 
          />
           <CVItem 
            year="2023" 
            title="Gallery Assistant at Art Madrid Art Fair" 
            place="Cibeles Palace (SP)" 
          />
        </div>
      </section>

      {/* SECCIÓN 3: MÉRITOS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">Merits & Exhibitions</h2>
        <div className="space-y-6">
          <CVItem 
            year="2025" 
            title="Artist in The Art of Caring – Group Exhibition" 
            place="Montecarmelo Cultural Center (SP)" 
          />
          {/* OJO: Aquí faltaba el nombre de la expo en el texto original */}
          <CVItem 
            year="2024" 
            title="Participant at [Nombre Expo] – Group Exhibition" 
            place="Pozo Julia Exhibition Hall (SP)" 
          />
          <CVItem 
            year="2024" 
            title="Artist in Infamous Fanzines – Group Exhibition" 
            place="Tipos Infames Art Space (SP)" 
          />
          <CVItem 
            year="2024" 
            title="Artist in Sinergies – Group Exhibition" 
            place="Exhibition Hall Fine Arts Faculty (SP)" 
          />
          <CVItem 
            year="2023" 
            title="Artist in Bienal de arte" 
            place="(IT)" 
          />
        </div>
      </section>
      
      {/* Botón Descarga (Opcional) */}
      <div className="mt-12 text-center">
        <a href="#" className="text-sm underline hover:text-gray-600 transition-colors">
          Download Full PDF
        </a>
      </div>

    </div>
  );
}

// COMPONENTE AUXILIAR (Para no repetir código mil veces)
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