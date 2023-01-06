import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import delaySync from './utils/delay';

export default function UseLayoutEffectVsUseEffect() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(0);

  /**
   * Cоздается виртуальное дерево, далее оно отдается на отрисовку в браузер
   * и только после этого вызывается функция переданная в useEffect,
   * в которой уже идет блокировка потока на 3 секунды,
   * и после спячки виртуальное дерево заново строится с новым значением в state
   * и это дерево передается на отрисовку в браузер
   */
  useEffect(() => {
    console.log('after DOMContentLoaded');
    delaySync();
    setWidth(ref?.current?.clientWidth || 999); // shows 0, after delay time 200
  }, []);

  /**
   * Cоздается виртуальное дерево, но перед тем как отдать виртуальное дерево на отрисовку в браузер,
   * вызывается useLayoutEffect (componentDidMount) и даже более того блокирует отрисовку в браузере,
   * в нашем случае на 3 секунды. setState заново перестраивает виртуальное дерево, и только после всего этого браузер рисует страницу.
   */
  //   useLayoutEffect(() => {
  //     console.log('before DOMContentLoaded');
  //     delaySync();
  //     setWidth(ref?.current?.clientWidth || 999); // shows 200
  //   }, []);

  return (
    <div>
      <span>width: {width}</span>
      <div
        ref={ref}
        style={{ width: '200px', height: '200px', background: 'red' }}
      />
    </div>
  );
}
