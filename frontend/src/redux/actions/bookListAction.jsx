import bookListService from "../services/bookListService";
const serv = bookListService;
export const getBooks = () => async (dispatch, getState) => {
    dispatch({ type: 'GET_BOOKS_REQUEST' });
    try {
        const response = await serv.getBookList();
        dispatch({ type: 'GET_BOOKS_SUCCESS', payload: response.data });
    } catch (error) {
        console.log(error);
    }
}