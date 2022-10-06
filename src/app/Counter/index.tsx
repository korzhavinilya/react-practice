import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addValue = () => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 1000);
  };

  return (
    <div>
      value: {value}
      <br />
      <button onClick={addValue}>+1</button>
    </div>
  );
};

export default Counter;
