import { SagaIterator } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import * as actions from "src/actions/todo";

function* deleteTodo(action): SagaIterator {
  yield put(actions.deleteTodo(action.payload));
}

function* createTodo(action): SagaIterator {
  yield put(actions.createTodo(action.payload));
}

export function* todoWatcher(): SagaIterator {
  yield takeLatest(actions.createTodoSaga.type, createTodo);
  yield takeLatest(actions.deleteTodoSaga.type, deleteTodo);
}
