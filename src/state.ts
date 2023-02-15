import { AppState } from "./types";

export const getAllBooks = (state: AppState) => state.books;
export const getComicsList = (state: AppState) => state.readComics;
export const getComic = (state: AppState) => state.comic;
export const getFilterName = (state: AppState) => state.filterName;
export const getFilterStatus = (state: AppState) => state.filterStatus;
