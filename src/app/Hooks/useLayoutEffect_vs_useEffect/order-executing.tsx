import React, { useEffect, useLayoutEffect, useRef } from 'react';

export default function OrderExecuting() {
  const ref = useRef<string>();

  useEffect(() => {
    ref.current = 'some value'; // 2
  });

  useLayoutEffect(() => {
    console.log(ref.current); // <-- this logs an old value because this runs first. Value is undefined
  });

  return <div></div>;
}
