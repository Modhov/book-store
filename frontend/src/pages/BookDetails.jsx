import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/bookDetails.css";
import "../styles/review.css"
import { API_URL } from "../redux/store";
import { addToWish } from "../redux/actions/userAction";
import axios from "axios";
import ReviewItem from "../components/ReviewItem";
import Rating from "react-rating";

/**
 * Renders the details of a book.
 *
 * @returns {JSX.Element} The BookDetails component.
 */
export default function BookDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user)
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState(5);
  const [review, setReview] = useState("");
  const [copied, setCopied] = useState("content_copy");
  const [wished, setWished] = useState(user && user.wishlist.filter(
    (book) => book === id
  ).length > 0);

  const dispatch = useDispatch();
  /**
   * Function to add a book to the wish list and toggle the wished state.
   */
  const wish = () => {
    dispatch(addToWish(id));
    setWished(!wished);
  };
  /**
   * Retrieves reviews by ID from the API.
   * @async
   * @function getReviews
   * @returns {Promise<void>}
   */
  async function getReviews() {
    try {
      const reviewsRes = await axios.get(API_URL + `/api/review/get-by-id?id=${id}`);
      setReviews(reviewsRes.data);
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * Handles the submission of a review.
   * 
   * @param {Event} e - The event object.
   * @returns {void}
   */
  async function handleReviewSubmit(e) {
    e.preventDefault();
    if (!user)
      alert("Please login")
    try {
      const res = await axios.post(API_URL + "/api/review/add", {
        bookid: id,
        stars,
        comment: review,
        userid: user.id,
        name: user.user
      })
      if (res.status == 200)
        getReviews();
      setReview("")
      setStars(5);
      alert("Review added successfully");
      getBook();
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * Fetches a book from the API based on the provided ID.
   * @async
   * @function getBook
   * @returns {Promise<void>} A Promise that resolves when the book is fetched successfully.
   * @throws {Error} If there is an error while fetching the book.
   */
  async function getBook() {
    try {
      const res = await axios.get(API_URL + "/api/book/get/" + id);
      setBook(res.data)
      getReviews();
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (id)
      getBook();
  }, [])
  if (book)
    return (
      <>
        <div className="book-details-container" >
          <div className="book-details">
            <div className="book-intro">
              <div>
                <img
                  className="book-intro__img"
                  src={
                    book.imageIds
                      ? `${API_URL}/api/file/download/${book.imageIds[0]}`
                      : "/src/assets/images.jpeg"
                  }
                />
              </div>
              <div className="book-intro__info">
                <div className="options">
                  <h1 className="book-intro__title">{book.name}</h1>
                  <span onClick={() => { navigator.clipboard.writeText("localhost:3000/#/book/" + id); setCopied("check") }} className="material-symbols-outlined">
                    {copied}
                  </span>
                  {user != null ?

                    (wished ?
                      <span onClick={wish} className="material-symbols-outlined">
                        bookmark_added
                      </span>
                      :
                      <span onClick={wish} className="material-symbols-outlined">
                        bookmark_add
                      </span>

                    )
                    : (
                      <span className="disabled material-symbols-outlined" onClick={() => (alert("Please Sign In"))} >bookmark_add</span>
                    )
                  }
                </div>
                <div className="second">
                  <h2 className="book-intro__author">{book.author}</h2>
                  {book.avg > 0 ?
                    <div>
                      {+book.avg.toFixed(2)}/5 <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>
                        star
                      </span>
                    </div>
                    :
                    <p>
                      no reviews yet.
                    </p>
                  }
                </div>
                <div className="book-intro__genres">
                  {book.genre.map((g) => {
                    return <span className="book-intro__genre secondary-button" key={g}>{g}</span>;
                  })}
                </div>
                <p className="book-intro__description">{book.description}</p>
                <div className="book-intro__genres">
                  <button className="buy-button">
                    <a href={book.buy} target="_blank">
                      Buy
                    </a>
                  </button>
                  <button className="buy-button">
                    <a href={book.buy} target="_blank">
                      Read
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="review-list">
            <form onSubmit={handleReviewSubmit} className="review-form">
              <Rating
                initialRating={5}
                start={0}
                onChange={(e) => setStars(e)}
                emptySymbol={
                  <span className="material-symbols-outlined">star</span>
                }
                fullSymbol={
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" }}>star</span>
                }
              />
              <textarea placeholder="Write your review here..." className="review-form__text" value={review} onChange={(e) => setReview(e.target.value)} />
              <button type="submit">Add Review</button>
            </form>
            {reviews.map((review) => {
              return (
                <ReviewItem key={review.id} review={review} />
              )
            })}
          </div>
        </div>
      </>
    );
  return (
    <span className="material-symbols-outlined loading">progress_activity</span>
  );
}
