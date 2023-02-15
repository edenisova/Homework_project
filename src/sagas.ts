import { getBooks, setBooks, getComicById, setChosenComic } from "./reducer";
import {
  all,
  call,
  put,
  takeLatest,
} from "redux-saga/effects";

import {getBooksFromLibrary, getComicsbyId} from './requests';

function* getBooksSaga(): any {
  const response = yield call(getBooksFromLibrary);
  yield put(setBooks(response.data.data.results))
}

function* getComicsByIdSaga(action: any): any {
  const response = yield call(getComicsbyId, action.payload);
  yield put(setChosenComic(response.data.data.results[0]))
}

function* actionWatcher() {
  yield takeLatest(getBooks, getBooksSaga);
  yield takeLatest(getComicById, getComicsByIdSaga);
}

export function* rootSaga() {
  yield all([actionWatcher()]);
}
