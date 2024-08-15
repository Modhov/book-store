import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNextBooks,
  getGenres,
} from "../redux/actions/bookListAction";

/**
 * Initializes the hook.
 * 
 * @returns {null}
 */
export default function InitHook() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getNextBooks());
  }, []);
  return null;
}
