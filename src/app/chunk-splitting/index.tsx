import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import EllipsisLoader from './components/EllipsisLoader';
import Menu from './components/Menu';
import RippleLoader from './components/RippleLoader';
import './style.css';

export default function ChunkSplitting() {
  const Hero = lazy(() => import('./components/Hero'));
  const Content = lazy(() => import('./components/Content'));
  const Footer = lazy(() => import('./components/Footer'));

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<EllipsisLoader />}>
          <Content />
          <Hero />
        </Suspense>
        <Suspense fallback={<RippleLoader />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
