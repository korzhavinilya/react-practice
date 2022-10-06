import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import './styles.css';

const Render17and18versionTest = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    //один рендер
    setCount((count) => count + 1);
    setFlag((flag) => !flag);
  }

  function handleClick2() {
    //два рендера
    flushSync(() => {
      setCount((count) => count + 1);
    });
    flushSync(() => {
      setFlag((flag) => !flag);
    });
  }

  console.log('render');

  return (
    <div>
      <div>count: {count}</div>
      <div>flag: {flag ? 'true' : 'false'}</div>
      <button className="btn" onClick={handleClick}>
        Click 1 render
      </button>
      <button className="btn" onClick={handleClick2}>
        Click 2 render
      </button>
    </div>
  );
};

export default Render17and18versionTest;
