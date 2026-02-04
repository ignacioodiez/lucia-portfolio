"use client"; // REQUIRED: Component is interactive

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext'; // Import context
import { translations } from '../data/translations';      // Import dictionary

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage(); 
  const t = translations[language];

  // Helper function: only toggle if we click the inactive language
  const handleLanguageSwitch = (targetLang) => {
    if (language !== targetLang) {
      toggleLanguage();
    }
  };

  return (
    <nav className="flex justify-start items-center gap-4 md:gap-120 px-8 pt-8 pb-0 bg-white text-black font-sans">
      
      {/* --- LOGO ZONE --- */}
      <div className="flex justify-start mb-4 md:mb-0">
        <Link href="/">
          <img 
              src="/img/Nombrenegro.png" 
              alt="Lucía Martín Lagunas" 
              className="w-auto object-contain"
              style={{ height: '140px' }} 
          />
        </Link>
      </div>

      {/* --- MENU ZONE --- */}
      <ul className="flex gap-14 text-lg font-medium text-gray-600 items-center">
        
        {/* Link: About me */}
        <li className="hover:text-black transition-colors">
          <Link href="/sobre-mi">
            {t.nav.about}
          </Link>
        </li>

        {/* Link: CV */}
        <li className="hover:text-black transition-colors">
          <Link href="/cv">
            {t.nav.cv}
          </Link>
        </li>

        {/* --- NEW TOGGLE SWITCH (ES / EN) --- */}
        <li>
            <div className="flex items-center border border-black rounded-full overflow-hidden ml-2">
                
                {/* ES BUTTON */}
                <button 
                    onClick={() => handleLanguageSwitch('es')}
                    className={`
                        px-3 py-1 text-xs font-bold transition-colors
                        ${language === 'es' 
                            ? 'bg-black text-white' // Active style
                            : 'bg-white text-black hover:bg-gray-100' // Inactive style
                        }
                    `}
                >
                    ES
                </button>

                {/* EN BUTTON */}
                <button 
                    onClick={() => handleLanguageSwitch('en')}
                    className={`
                        px-3 py-1 text-xs font-bold transition-colors
                        ${language === 'en' 
                            ? 'bg-black text-white' // Active style
                            : 'bg-white text-black hover:bg-gray-100' // Inactive style
                        }
                    `}
                >
                    EN
                </button>

            </div>
        </li>

      </ul>
    </nav>
  );
}