import { useEffect, useState } from 'react';

function useCounter(initialValue: number = 0) {
  const [counter, setCounter] = useState(initialValue);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  return { counter, increase };
}

export default function Component() {
  const { counter, increase } = useCounter(1);

  useEffect(() => {
    if (counter === 4) {
      throw new Error('Counter equals 4');
    }
  }, [counter]);

  return (
    <div>
      value: {counter} <br />
      <button className="border border-black px-4 mt-3" onClick={increase}>
        increase
      </button>
    </div>
  );
}
