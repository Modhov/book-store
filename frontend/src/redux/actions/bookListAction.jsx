import bookListService from "../services/bookListService";
const serv = bookListService;

export const postBook = (data) => async (dispatch, getState) => {
    const res = await serv.postBook(data);
    if (res.status == 200) {
        alert("Book added successfully");
    } else {
        console.log(res);
    }
}

export const getBooks = () => async (dispatch, getState) => {
    const res = await serv.getBooks(getState().books.currentPage);
    if (res.status == 200) {
        dispatch({ type: 'ADD_BOOKS_SUCCESS', payload: res.data });
    } else {
        console.log(res);
    }
}