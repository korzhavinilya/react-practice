import useResize from './hooks/useResize';

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
