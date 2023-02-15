import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const saveToLocalStorage = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

let store = configureStore({ reducer, middleware: [sagaMiddleware] });

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;
