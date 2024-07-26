import bookListService from "../services/bookListService";
const serv = bookListService;

export const postBook = (data) => async (dispatch, getState) => {
  const res = await serv.postBook(data);
  if (res.status == 200) {
    alert("Book added successfully");
  } else {
    console.log(res);
  }
};

export const getBooks =
  (attribute = "id", order = true) =>
  async (dispatch, getState) => {
    const res = await serv.getBooks(
      getState().books.currentPage,
      attribute,
      order
    );
    if (res.status == 200) {
      if (res.data.length == 0) {
        dispatch({ type: "LIMIT_REACHED" });
        return;
      } else {
        dispatch({ type: "ADD_BOOKS_SUCCESS", payload: res.data });
        if (res.data.length < 6) {
          dispatch({ type: "LIMIT_REACHED" });
        }
      }
    } else {
      console.log(res);
    }
  };

export const searchBooks = (search) => async (dispatch, getState) => {
  const res = await serv.searchBooks(search);
  if (res.status == 200) {
    dispatch({ type: "SEARCHED_BOOKS", payload: res.data });
  } else {
    console.log(res);
  }
};

export const getGenres = () => async (dispatch, getState) => {
  const res = await serv.getGenres();
  if (res.status == 200) {
    dispatch({ type: "GENRES", payload: res.data });
  } else {
    console.log(res);
  }
};
