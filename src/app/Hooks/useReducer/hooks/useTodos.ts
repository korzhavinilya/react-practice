import { useReducer } from 'react';

interface Todo {
  id: number;
  title: string;
  body?: string;
  completed: boolean;
}

interface TodoState {
  name: string;
  todos: Todo[];
}

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

interface Action {
  type: typeof ADD_TODO | typeof UPDATE_TODO | typeof DELETE_TODO;
  payload: any;
}

const initialState: TodoState = {
  name: 'Common',
  todos: [],
};

function reducer(state: TodoState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
    case DELETE_TODO:
    default:
      return state;
  }
}

export default function useTodos() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  function add(todo: Todo) {
    dispatch({ type: ADD_TODO, payload: todo });
  }

  function update(todo: Todo) {
    dispatch({ type: DELETE_TODO, payload: id });
  }

  function remove(id: number) {
    dispatch({ type: DELETE_TODO, payload: id });
  }

  return { todos, add, remove };
}
