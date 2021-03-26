import { Todo } from "../store";
import { createAction } from "./action";

export const createTodo = createAction<"app/todos/createTodo", Todo>("app/todos/createTodo");
export const createTodoSaga = createAction<"app/todos/createTodoSaga", Todo>("app/todos/createTodoSaga");
export const deleteTodo = createAction<"app/todos/deleteFromTodoList", number>("app/todos/deleteFromTodoList");
export const deleteTodoSaga = createAction<"app/todos/deleteTodoSaga", number>("app/todos/deleteTodoSaga");
