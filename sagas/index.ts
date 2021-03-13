import { SagaIterator } from "redux-saga";
import { fork } from "redux-saga/effects";
import { createTodoWatcher } from "./todo";

export function* rootSaga(): SagaIterator {
  yield fork(createTodoWatcher);
}
