import React from 'react'
import Rating from 'react-rating'
import "../styles/review.css"
/**
 * Renders a review item component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.review - The review object.
 * @param {boolean} [props.profile=false] - Indicates if the component is rendered in a profile view.
 * @returns {JSX.Element} The rendered review item component.
 */
export default function ReviewItem({ review, profile = false }) {
    return (
        <div className='review' onClick={() => {
            if (profile)
                window.location.href = "#/book/" + review.bookid
        }}>
            <div className='review-profile'>

                <p className='profile-pic'>
                    {review.name.substr(0, 1)}
                </p>
                <p className='name'>
                    {review.name}
                </p>
            </div>
            <Rating readonly initialRating={review.stars} emptySymbol={<span className="material-symbols-outlined">
                star
            </span>} fullSymbol={<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>
                star
            </span>} />
            {review.comment}
        </div>
    )
}
