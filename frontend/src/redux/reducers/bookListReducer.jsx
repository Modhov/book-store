const initialState = {
    books: [],
    currentPage: 0,
    last: false
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
                last: false
            }
        default:
            return state
    }
}
