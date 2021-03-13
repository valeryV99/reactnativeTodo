import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/todo";

function* deleteTodo(action): SagaIterator {
  yield put(actions.deleteFromTodoList(action.payload));
}

function* createTodo(action): SagaIterator {
  yield put(actions.addTodo(action.payload));
}

export function* createTodoWatcher(): SagaIterator {
  yield takeLatest(actions.createTodo.type, createTodo);
  yield takeLatest(actions.deleteTodo.type, deleteTodo);
}
