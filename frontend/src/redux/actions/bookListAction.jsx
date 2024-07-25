import bookListService from "../services/bookListService";
const serv = bookListService;

export const postBook = (data) => async (dispatch, getState) => {
    const res = await serv.postBook(data);
    console.log(res);
}