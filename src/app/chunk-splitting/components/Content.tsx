import { useEffect } from 'react';

export default function Content() {
  useEffect(() => {
    console.log('Content: loaded');
  }, []);

  return <div className="content">Content</div>;
}
