import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, getGenres } from '../redux/actions/bookListAction';

export default function InitHook() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state).books
    useEffect(() => {
        dispatch(getGenres());
        console.log(selector)
    }, [])
    return null

}
