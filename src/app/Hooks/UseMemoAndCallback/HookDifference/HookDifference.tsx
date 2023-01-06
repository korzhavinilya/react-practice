import { useCallback, useMemo } from 'react';
export default function HookDifference() {
  // the same
  // const memoizedCallback = useCallback(() => {
  //   foo();
  // }, []);
  const memoizedCallback = useCallback(foo, []);

  const memoizedResult = useMemo(foo, []);
  const realWorldMemoizedResult = useMemo(() => foo(), []);
  // the same as useCallback
  const equivalentMemoizedCallback = useMemo(() => foo, []);

  function foo() {
    console.log('foo invoking');
    return 'bar';
  }

  return (
    <div>
      <h1>HookDifference</h1>

      <button onClick={memoizedCallback}>useCallback</button>

      <p>memoizedResult: {memoizedResult}</p>
      <p>realWorldMemoizedResult: {realWorldMemoizedResult}</p>

      <button onClick={equivalentMemoizedCallback}>
        equivalentMemoizedCallback
      </button>
    </div>
  );
}
