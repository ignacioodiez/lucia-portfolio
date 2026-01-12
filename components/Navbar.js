import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 bg-white text-black font-sans">
      <div className="text-xl font-bold uppercase tracking-wider">
        <Link href="/">
          Lucia Martin Lagunas
        </Link>
      </div>
      <ul className="flex gap-8 text-sm font-medium text-gray-600">
        
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