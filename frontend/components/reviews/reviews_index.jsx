import React, { useEffect } from "react";

const ReviewsIndex = props => {
    const {hotel, reviews} = props;
    const options = { month: 'long'};

    const reviewItems = Object.values(reviews).map( (review, idx) => {
        let date = new Date(review.createdAt);
        let month = new Intl.DateTimeFormat('en-US', options).format(date);
        let year = date.getFullYear();

        return (
            <li key={idx} className="review-item-container">
                <h2>What I liked:</h2>
                <p>{review.body}</p>
        
                <h2>What the hotel could do better:</h2>
                {/* <p>{review.cons}</p> */}
                <div className="review-item-reviewer-info">
                    <p>{review.reviewer.fname}</p>
                    <p>{month + " " + year}</p>
                </div>
            </li>
        )
    })

    return (
        <section className="reviews-index-container">
            <div className="reviews-index-content">
                <div className="reviews-index-header">
                    <h1>{hotel.name}</h1>
                    <h1>Reviews</h1>
                </div>
                <div className="reviews-index-list"> 
                    <ul>
                        {reviewItems}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ReviewsIndex;