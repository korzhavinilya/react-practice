import { makeAutoObservable } from 'mobx';

class ObservableTodo {
  public todos: any[];

  constructor() {
    makeAutoObservable(this);
    this.todos = [
      {
        id: 1,
        title: 'Go to shop',
        completed: true,
      },
      {
        id: 2,
        title: 'Watch TV',
        completed: false,
      },
      {
        id: 3,
        title: 'Make exercise',
        completed: false,
      },
    ];
  }

  add(todo: any) {
    this.todos.push(todo);
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  complete(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/4')
      .then((response) => response.json())
      .then((json) => {
        this.todos.push(json);
      });
  }
}

export default new ObservableTodo();
