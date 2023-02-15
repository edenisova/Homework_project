import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { AppState, BookStatus } from "./types";

const arg = localStorage.getItem("state") || "";

const initArray = arg ? JSON.parse(arg).readComics : [];
const comicsArray = arg ? JSON.parse(arg).books : [];

const initialState = {
  books: [...comicsArray],
  readComics: [...initArray],
  comic: undefined,
  isLoading: false,
  filterName: "",
  filterStatus: "",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    changeLikes: (state: Draft<AppState>, action: PayloadAction<number>) => {
      state.readComics = state.readComics.map((item) => item.id === action.payload
        ? { ...item, isLiked: !item.isLiked }
        : item
      );
    },
    changeDislikes: (state: Draft<AppState>, action: PayloadAction<number>) => {
      state.readComics = state.readComics.map((comic) =>
        comic.id === action.payload
          ? { ...comic, isDisliked: !comic.isDisliked }
          : comic
      );
    },
    getBooks: (state: Draft<AppState>) => {
      state.isLoading = true;
    },
    setBooks: (state: Draft<AppState>, action) => {
      state.books = action.payload;
    },
    getComicById: (state: Draft<AppState>, _action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    setChosenComic: (state: Draft<AppState>, action) => {
      state.comic = action.payload;
    },
    resetChosenComic: (state: Draft<AppState>) => {
      state.comic = undefined;
    },
    addBooks: (state: Draft<AppState>, action) => {
      state.readComics.push(action.payload);
    },
    deleteBooks: (state: Draft<AppState>, action: PayloadAction<number>) => {
      state.readComics = state.readComics.filter((book) => {
        return book.id !== action.payload;
      });
    },
    changeStatus: (
      state: Draft<AppState>,
      action: PayloadAction<BookStatus>
    ) => {
      state.readComics = state.readComics.map((comic) =>
        comic.id === action.payload.id
          ? { ...comic, status: action.payload.status }
          : comic
      );
    },
    filterByName: (state: Draft<AppState>, action: PayloadAction<string>) => {
      state.filterName = action.payload;
    },
    filterbyStatus: (state: Draft<AppState>, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  changeLikes,
  changeDislikes,
  addBooks,
  getBooks,
  setBooks,
  getComicById,
  setChosenComic,
  resetChosenComic,
  deleteBooks,
  changeStatus,
  filterByName,
  filterbyStatus,
} = booksSlice.actions;

export default booksSlice.reducer;
