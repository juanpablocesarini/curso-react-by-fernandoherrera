interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TaskState {
  todos: Todo[];
  length: number;
  compeleted: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");
  if (!localStorageState) {
    return {
      todos: [],
      compeleted: 0,
      pending: 0,
      length: 0,
    };
  }
  return JSON.parse(localStorageState);
};
export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id != action.payload,
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        compeleted: currentTodos.filter((todo) => todo.completed).length,
        pending: currentTodos.filter((todo) => !todo.completed).length,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
        compeleted: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
      };
    }
    default:
      return state;
  }
};
