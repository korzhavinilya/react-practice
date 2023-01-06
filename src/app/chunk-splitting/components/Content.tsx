import { lazy, useEffect } from 'react';
import { Route } from 'react-router-dom';

export default function Content() {
  const A = lazy(() => import('./A'));
  const B = lazy(() => import('./B'));

  useEffect(() => {
    console.log('Content: loaded');
  }, []);

  return (
    <div className="content">
      Content
      <Route path="/a">
        <A />
      </Route>
      <Route path="/b">
        <B />
      </Route>
    </div>
  );
}
