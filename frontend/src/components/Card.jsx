import React from 'react'
import LazyLoad from 'react-lazy-load'
import { API_URL } from '../redux/store';
import { useDispatch } from 'react-redux';
import { getNextBooks } from '../redux/actions/bookListAction';

/**
 * LazyCard component.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.book - The book object.
 * @returns {JSX.Element} The rendered LazyCard component.
 */
const LazyCard = ({ book }) => {
    return (
        <div className="book-list-item" title={book.name} onClick={() => window.location.href = `/#/book/${book.id}`}>
            <img className="book-item-img" src={book.imageIds ? `${API_URL}/api/file/download/${book.imageIds[0]}` : "/src/assets/images.jpeg"} />
            <div className="book-item-desc">
                <p className="book-item-name" aria-description={book.name}>{book.name}</p>
                <p className="book-item-author" >{book.author}</p>
                <p>₹{book.price}</p>
            </div>
        </div>
    )
}

/**
 * Renders a Card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.book - The book object to be displayed in the card.
 * @param {boolean} [props.isMainList=false] - Indicates if the card is part of the main list.
 * @returns {JSX.Element} The rendered Card component.
 */
export default function Card({ book, isMainList = false }) {
    const dispatch = useDispatch();
    const loadNext = () => {
        if (!isMainList)
            return;
        dispatch(getNextBooks());
    }
    return (
        <LazyLoad elementType='div' height={440} width={300} threshold={0.25} onContentVisible={loadNext}>
            <LazyCard book={book} />
        </LazyLoad>
    )
}
