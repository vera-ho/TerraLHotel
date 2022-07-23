import React from "react";

const HotelReviewsIndex = props => {
    const {hotel, reviews} = props || {};
    const options = { month: 'long'};

    const reviewItems = Object.values(reviews).map( (review, idx) => {
        let date = new Date(review.createdAt);
        let month = new Intl.DateTimeFormat('en-US', options).format(date);
        let year = date.getFullYear();

        return (
            <li key={idx} className="review-item-container">
                <div className="review-item-details">
                    <h2>What I liked:</h2>
                    {review.pros}
                </div>

                {/* Only display cons and cons header if there are any */}
                {review.cons.length > 0 ? (
                    <div className="review-item-details">
                        <h2>What the hotel could do better:</h2>
                        {review.cons}
                    </div>
                ) : (<></>)}
                
                <div className="review-item-reviewer-info">
                    <div className="reviewer-icon"></div>
                    <div className="reviewer-details">
                        <p>{review.reviewer.fname} {review.reviewer.lname}</p>
                        <p>{month + " " + year}</p>
                    </div>
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

export default HotelReviewsIndex;