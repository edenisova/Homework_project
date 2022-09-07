export function likeBook(id) {
    return {
      type: 'CHANGE_LIKES',
      id
    }
  }
  
  export function dislikeBook(id) {
    return {
      type: 'CHANGE_DISLIKES',
      id
    }
  }

export function addBook(item) {
    return {
        type: 'ADD_BOOKS',
        item
    }
}

export function deleteBook(id) {
  return {
      type: 'DELETE_BOOKS',
      id
  }
}

export function changeBookStatus(params) {
  return {
      type: 'CHANGE_BOOK_STATUS',
      params
  }
}

  export function filterBookByName(title) {
    return {
      type: 'FILTER_BY_NAME',
      title
    }
  }

  export function filterBookByStatus(status) {
    return {
      type: 'FILTER_BY_STATUS',
      status
    }
  }