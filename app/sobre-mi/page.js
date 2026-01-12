// app/sobre-mi/page.js
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* FOTO DE LUCÍA */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative shadow-lg">
             {/* IMPORTANTE: Acuérdate de cambiar esta url por una foto suya real en /public */}
           <img 
            src="/sobre-mi.jpg"  // <--- Solo esto. Next.js busca automáticamente en la carpeta public
            alt="Lucía Martín Lagunas" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
/>
          </div>
        </div>

        {/* TEXTO BIO */}
        <div className="w-full md:w-2/3 space-y-6 text-lg leading-relaxed text-gray-800 font-light">
          
          <h1 className="text-4xl font-bold mb-2 text-black tracking-tight">Lucía Martín Lagunas</h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-bold">
            Madrid, España
          </p>
          
          <p>
            Lucía Martín Lagunas es una creativa que centra su investigación en la difusión e intercambio de conocimiento, y en la práctica artística colaborativa como acción directa contra la jerarquía cultural.
          </p>

          <p>
            Afincada en Madrid, España, sus proyectos se desarrollan mayoritariamente en contextos colectivos, a través de encuentros y procesos compartidos. Entiende la creación conjunta como un acto político en sí mismo, capaz de generar un <em className="italic font-serif">hacer</em> que reivindica la autoría colectiva y que desempeña entre sus <em className="italic font-serif">creadores</em> una pedagogía crítica y afectiva.
          </p>

          <p>
            Graduada en Bellas Artes por la Universidad Complutense de Madrid, realizó su tercer curso de carrera en la Universidad de California, Berkeley, gracias a obtener 1 de las 12 becas que esta institución ofrecía. Durante ese año, asentó sus conocimientos en el cooperativismo artístico y la gestión cultural con conciencia social.
          </p>

          <p>
            Además, ha participado en múltiples exposiciones colectivas en España, Estados Unidos e Italia, y en residencias artísticas como Cian-M Fabero (León, España, 2024) o TIZA (Madrid, España, 2025).
          </p>
          
          {/* SECCIÓN CONTACTO SIMPLE */}
          <div className="pt-8 border-t border-gray-200 mt-8">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Contacto</h3>
            <div className="flex gap-6 text-sm">
              <a href="mailto:email@ejemplo.com" className="hover:text-gray-500 underline">Email</a>
              <a href="https://instagram.com/tu_usuario" target="_blank" className="hover:text-gray-500 underline">Instagram</a>
              <a href="https://linkedin.com/in/tu_usuario" target="_blank" className="hover:text-gray-500 underline">LinkedIn</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}