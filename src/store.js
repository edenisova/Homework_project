import reducer from "./reducer";
import { createStore } from "redux";

const saveToLocalStorage = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

let store = createStore(reducer);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
