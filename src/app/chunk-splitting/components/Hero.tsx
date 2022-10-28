import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    console.log('Hero: loaded');
  }, []);

  return <div className="hero">Hero</div>;
}
