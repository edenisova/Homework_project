const initArray = JSON.parse(localStorage.getItem("state")) ? JSON.parse(localStorage.getItem("state")).books : []

const initialState = {
  books: [...initArray],
  filterName: "",
  filterStatus: '',
};

const reducer = (state = initialState, action) => {
//   let newState = { ...state };
  switch (action.type) {
    case "CHANGE_LIKES":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.bookId !== action.id) {
            return book;
          }
          return {
            ...book,
            isLiked: !book.isLiked,
          };
        }),
      };
    case "CHANGE_DISLIKES":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.bookId !== action.id) {
            return book;
          }
          return {
            ...book,
            isDisliked: !book.isDisliked,
          };
        }),
      };
    case "ADD_BOOKS":
      return {
        ...state,
        books: [...state.books, action.item],
      };
    case "DELETE_BOOKS":
      return {
        ...state,
        books: state.books.filter(
          (book) => book.bookId !== Number(action.id)
        ),
      };
    case "CHANGE_BOOK_STATUS":
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.bookId !== Number(action.params.id)) {
            console.log(book);
            return book;
          }
          return {
            ...book,
            status: action.params.status,
          };
        }),
      };
    case "FILTER_BY_NAME":
      return {
        ...state,
        filterName: action.title,
      };
      case "FILTER_BY_STATUS":
      return {
        ...state,
        filterStatus: action.status,
      };
  }
  return state;
};

export default reducer;
