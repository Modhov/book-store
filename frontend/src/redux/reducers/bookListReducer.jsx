const initialState = {
    books: [],
    loading: false,
}

export default function bookListReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'GET_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
