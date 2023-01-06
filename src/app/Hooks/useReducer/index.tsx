import useTodos from './hooks/useTodos';

export default function UseReducerContainer() {
  const { todos, add } = useTodos();

  function handleCreateTodo() {
    const title = prompt('Title:') || '';
    const body = prompt('Body:') || undefined;
    add({ id: Date.now(), title, body, completed: false });
  }

  return (
    <div>
      <button onClick={handleCreateTodo}>Add Todo</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
