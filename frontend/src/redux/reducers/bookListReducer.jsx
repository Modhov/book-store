const initialState = {
    books: [],
    currentPage: 0,
    last: false,
    searched: false,
}

export default function bookListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOKS_SUCCESS':
            return {
                ...state,
                books: [...state.books, ...action.payload],
                currentPage: state.currentPage + 1,
            }
        case 'LIMIT_REACHED':
            return {
                ...state,
                last: true,
            }
        case 'SEARCHED_BOOKS':
            return {
                ...state,
                books: action.payload,
                currentPage: 0,
                last: false,
                searched: true,
            }
        case 'CANCEL_SEARCH':
            return {
                ...state,
                currentPage: 0,
                searched: false,
            }
        default:
            return state
    }
}
