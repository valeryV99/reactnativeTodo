import * as actions from "../actions/sample";
import { Todo } from "../store";
import { INITIAL_STATE } from "./initialState";

type Action = typeof actions.addTodo.shape | typeof actions.deleteFromTodoList.shape;

export function todoReducer(state: Todo[] = INITIAL_STATE.todos, action: Action): Todo[] {
  switch (action.type) {
    case actions.addTodo.type: {
      return [...state, action.payload];
    }
    case actions.deleteFromTodoList.type: {
      return state.filter(todo => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
