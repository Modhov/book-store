const initialState = {
    user: null,
    userType: 'guest'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_USER_TYPE':
            return {
                ...state,
                userType: action.payload
            }
        default:
            return state
    }
}

export default userReducer;