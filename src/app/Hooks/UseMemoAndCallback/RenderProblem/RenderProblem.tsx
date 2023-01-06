import React, { useCallback, useState } from 'react';
import Child from './Child/Child';

export default function RenderProblem() {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  function incrementLocal() {
    setLocalNumber((value) => value + 1);
  }

  const memoizedIncrementChild = useCallback(incrementChild, []);

  function incrementChild() {
    setChildNumber((value) => value + 1);
  }

  console.log('Local render');

  return (
    <div>
      <Child
        // incrementChild={incrementChild}
        incrementChild={memoizedIncrementChild}
        childNumber={childNumber}
      />
      <button onClick={incrementLocal}>Click to increment local number</button>
      <h1>localNumber: {localNumber}</h1>
    </div>
  );
}
