import { createContext, useContext } from 'react';

export interface ThemeContextInterface {
  darkMode: boolean;
  trigger: () => void;
}

export const initialThemeContext: ThemeContextInterface = {
  darkMode: false,
  trigger: () => {},
};

export const ThemeContext = createContext(initialThemeContext);

export const useThemeContext = () => useContext(ThemeContext);
