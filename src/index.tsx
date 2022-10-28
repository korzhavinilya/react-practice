import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

serviceWorker.register();
