import React from 'react'
import LazyLoad from 'react-lazy-load'
import { API_URL } from '../redux/store';

const LazyCard = ({ book }) => {
    return (
        <div className="book-list-item">
            <img className="book-item-img" src={book.imageIds ? `${API_URL}/download/${book.imageIds[0]}` : "/src/assets/images.jpeg"} />
            <div className="book-item-desc">
                <p className="book-item-name" aria-description={book.name}>{book.name}</p>
                <p className="book-item-author">{book.author}</p>
                <p>₹{book.price}</p>
            </div>
        </div>
    )
}

export default function Card({ book }) {
    return (
        <LazyLoad elementType='div' height={340} width={250} threshold={0.25}>
            <LazyCard book={book} />
        </LazyLoad>
    )
}
