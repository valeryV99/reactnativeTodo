import { Sample, Todo } from "../store";
import { createAction } from "./action";

export const updateSampleList = createAction<"app/sample/updateList", Sample[]>("app/sample/updateList");

export const fetchSampleList = createAction<"app/sample/fetchList">("app/sample/fetchList");

export const addTodo = createAction<"app/todos/addTodo", Todo>("app/todos/addTodo");
export const createTodo = createAction<"app/todos/createTodo", Todo>("app/todos/createTodo");
export const deleteTodo = createAction<"app/todos/deleteTodo", number>("app/todos/deleteTodo");
export const deleteFromTodoList = createAction<"app/todos/deleteFromTodoList", number>("app/todos/deleteFromTodoList");
