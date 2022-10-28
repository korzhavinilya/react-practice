import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    console.log('Footer: loaded');
  }, []);

  return <div className="footer">Footer</div>;
}
