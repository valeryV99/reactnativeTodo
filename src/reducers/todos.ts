import * as actions from "src/actions/todo";
import { Todo } from "src/store";
import { INITIAL_STATE } from "./initialState";

type Action = typeof actions.createTodo.shape | typeof actions.deleteTodo.shape;

export function todoReducer(state: Todo[] = INITIAL_STATE.todos, action: Action): Todo[] {
  switch (action.type) {
    case actions.createTodo.type: {
      return [...state, action.payload];
    }
    case actions.deleteTodo.type: {
      return state.filter(todo => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
