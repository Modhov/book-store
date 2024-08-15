import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getWishlist } from '../redux/actions/userAction';
import Card from '../components/Card';
import "../styles/profile.css";
import axios from 'axios';
import { API_URL } from '../redux/store';
import ReviewItem from '../components/ReviewItem';

/**
 * Renders the user profile page.
 *
 * @returns {JSX.Element} The profile page component.
 */
export default function Profile() {
    const selector = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [reviews, setReviews] = useState([]);
    /**
     * Retrieves reviews by user ID.
     * @async
     * @function getReviews
     * @returns {Promise<void>} - A promise that resolves when the reviews are retrieved successfully.
     * @throws {Error} - If there is an error retrieving the reviews.
     */
    async function getReviews() {
        try {
            const reviewsRes = await axios.get(API_URL + `/api/review/get-by-id?id=${selector.user.id}`);
            setReviews(reviewsRes.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getReviews();
        dispatch(getWishlist());
    }, [selector.user, selector.wishlist])
    if (selector.user == null) {
        return (
            <h2>{"Please "}
                <a href='#/sign-in'>
                    Login
                </a>
                {" to continue"}</h2>
        )
    }

    return (
        <div className='profile'>
            <h1>{selector.user.user}</h1>
            <h2>Wishlist</h2>
            <div className="book-list">
                {selector.wishlist.map(bk => {
                    return (
                        <Card book={bk} />
                    )
                })}
            </div>
            <div className="review-list">

                {reviews.map((review) => <ReviewItem profile review={review} />)}
            </div>

        </div>
    )
}
