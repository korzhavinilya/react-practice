import Batching from './components/batching';
import ConcurrentMode from './components/concurrent-mode';

export default function React18() {
  return (
    <div>
      <Batching />
      <ConcurrentMode />
    </div>
  );
}
