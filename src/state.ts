interface Books {
    title: string;
    author: string;
    description: string;
    isLiked: boolean;
    bookId: number;
    isDisliked: boolean;
    status: string;
}


export type AppState = {
    books: Array<Books>
    filterName: string
    filterStatus: string
}

export const getAllBooks = (state: AppState): Array<Books> => state.books
export const getFilterName = (state: AppState) => state.filterName
export const getFilterStatus = (state: AppState) => state.filterStatus