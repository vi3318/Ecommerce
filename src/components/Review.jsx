import React, { useState } from 'react';
import './Review.css';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview('');
  };

  return (
    <div className="review-section">
      <h2 className="review-heading">Reviews</h2>
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">{review}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="review-form">
        <label className="review-label">
          Add Review:
          <input
            type="text"
            value={newReview}
            onChange={(event) => setNewReview(event.target.value)}
            className="review-input"
          />
        </label>
        <button type="submit" className="review-button">Submit</button>
      </form>
    </div>
  );
}

export default Review;