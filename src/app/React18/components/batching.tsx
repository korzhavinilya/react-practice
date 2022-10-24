import { useState } from 'react';
import { flushSync } from 'react-dom';

export default function Batching() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  console.log('Render');

  function oneRenderUpdate() {
    setTimeout(() => {
      setValue1(Math.random());
      setValue2(Math.random());
    }, 200);
  }

  function severalRenderUpdate() {
    flushSync(() => {
      setValue1(Math.random());
    });

    flushSync(() => {
      setValue2(Math.random());
    });
  }

  return (
    <div className="flex flex-col">
      <h2>Batching with async events</h2>
      <button onClick={oneRenderUpdate}>Update with batching</button>
      <button onClick={severalRenderUpdate}>Update without batching</button>
    </div>
  );
}
