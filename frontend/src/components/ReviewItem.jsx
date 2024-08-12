import React from 'react'
import Rating from 'react-rating'

export default function ReviewItem({ review, profile = false }) {
    return (
        <div onClick={() => {
            if (profile)
                window.location.href = "#/book/" + review.bookid
        }}>
            {review.name}
            <Rating readonly initialRating={review.stars} emptySymbol={<span className="material-symbols-outlined">
                star
            </span>} fullSymbol={<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>
                star
            </span>} />
            {review.comment}
        </div>
    )
}
