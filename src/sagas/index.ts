import { SagaIterator } from "redux-saga";
import { fork } from "redux-saga/effects";
import { todoWatcher } from "./todo";

export function* rootSaga(): SagaIterator {
  yield fork(todoWatcher);
}
