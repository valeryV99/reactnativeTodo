import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import useCachedResources from "src/hooks/useCachedResources";
import useColorScheme from "src/hooks/useColorScheme";
import Navigation from "src/navigation";
import * as reducers from "src/reducers";
import { INITIAL_STATE } from "src/reducers/initialState";
import { rootSaga } from "src/sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
