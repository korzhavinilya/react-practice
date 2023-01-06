import ThemeProvider from './context/ThemeProvider';
import StyleComponent from './StyleComponent';

export default function ContextAPI() {
  return (
    <div>
      <ThemeProvider>
        <StyleComponent />
      </ThemeProvider>
    </div>
  );
}
