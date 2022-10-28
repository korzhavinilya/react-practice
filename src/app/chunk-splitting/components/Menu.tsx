import { useEffect } from 'react';

export default function Menu() {
  useEffect(() => {
    console.log('Menu: loaded');
  }, []);

  return <div className="menu">Menu</div>;
}
