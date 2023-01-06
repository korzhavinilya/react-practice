import React, { useState } from 'react';
import { initialThemeContext, ThemeContext } from './ThemeContext';

type ThemeContextProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeContextProps) {
  const [darkMode, setDarkMode] = useState(initialThemeContext.darkMode);

  function trigger() {
    setDarkMode((mode) => !mode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, trigger }}>
      {children}
    </ThemeContext.Provider>
  );
}
