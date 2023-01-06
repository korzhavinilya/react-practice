import { useEffect, useState } from 'react';

const Timer = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>timer: {value}</div>;
};

export default Timer;
