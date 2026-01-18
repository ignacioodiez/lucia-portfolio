import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 bg-white text-black font-sans">
     {/* SUSTITUYE EL BLOQUE DE TEXTO ANTIGUO POR ESTO.
   Asegúrate de que la ruta src="/img/nombre-header.png" coincide con el nombre de tu archivo.
*/}
<div className="flex justify-start mb-4 md:mb-0">
  <Link href="/">
    <img 
        src="/img/Nombrenegro.png" 
        alt="Lucía Martín Lagunas" 
        className="w-auto object-contain"
        // ESTO ES LO NUEVO: Forzamos la altura a 30 píxeles a mano.
        // Si sigue siendo grande, cambia '30px' por '20px'.
        style={{ height: '140px' }} 
    />
    </Link>
</div>
      <ul className="flex gap-8 text-lg font-medium text-gray-600">
        
        <li className="hover:text-black transition-colors">
          <Link href="/sobre-mi">Sobre mí</Link>
        </li>
        <li className="hover:text-black transition-colors">
          <Link href="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
}