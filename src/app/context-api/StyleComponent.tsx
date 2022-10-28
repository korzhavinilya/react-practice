import { useThemeContext } from './context/ThemeContext';

export default function StyleComponent() {
  const { darkMode, trigger } = useThemeContext();

  return (
    <div>
      <h1>Mode: {darkMode ? 'Dark' : 'Light'}</h1>
      <button onClick={trigger}>Switch</button>
    </div>
  );
}
