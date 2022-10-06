import { observer } from 'mobx-react-lite';
import observableTodo from './store/ObservableTodo';

function Todo() {
  return (
    <div className="flex flex-col items-center">
      {observableTodo.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => observableTodo.complete(todo.id)}
          />
          {' ' + todo.title + ' '}
          <button onClick={() => observableTodo.remove(todo.id)}>X</button>
        </div>
      ))}

      <button
        className="border border-black p-1"
        onClick={() => observableTodo.fetchTodo()}
      >
        Fetch todo
      </button>
    </div>
  );
}

export default observer(Todo);
