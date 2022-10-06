import { observer } from 'mobx-react-lite';
import counter from './store/ObservableCounter';

function Counter() {
  return (
    <div className="flex flex-col items-center">
      <h1>count: {counter.count}</h1>
      <button
        onClick={() => {
          counter.increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter.decrement();
        }}
      >
        -
      </button>
    </div>
  );
}

export default observer(Counter);
