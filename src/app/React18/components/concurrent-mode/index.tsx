import DeferredValue from './components/deferred-value';
import Lagging from './components/lagging';
import Transition from './components/transition';

export default function ConcurrentMode() {
  return (
    <div className="flex flex-col">
      <h1>Concurrent Mode</h1>
      <Transition />
      <DeferredValue />
      <Lagging />
    </div>
  );
}
