import React, { useEffect, useState } from 'react';

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize(event: any) {
      setWidth(event.target?.innerWidth);
      setHeight(event.target?.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height };
}

export default function Resize() {
  const { width, height } = useResize();
  return (
    <div>
      width: {width}
      <br />
      height: {height}
    </div>
  );
}
