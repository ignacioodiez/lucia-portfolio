"use client"; // REQUIRED: Context uses React hooks (useState), so it must be a client component

import { createContext, useContext, useState } from 'react';

// 1. Create the Context object
const LanguageContext = createContext();

// 2. Create the Provider component
// This component will wrap your entire application to provide the language state globally
export function LanguageProvider({ children }) {
  // State to hold the current language ('es' is the default)
  const [language, setLanguage] = useState('es');

  // Function to toggle between Spanish and English
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // The value object contains the data we want to expose to the rest of the app
  const value = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Custom Hook to use the context easily
// Instead of importing useContext and LanguageContext in every file, just import this hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // Safety check: ensure the hook is used within a Provider
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}