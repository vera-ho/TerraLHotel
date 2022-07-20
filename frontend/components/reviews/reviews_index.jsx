import React, { useEffect } from "react";

const ReviewsIndex = props => {

    const {user, hotel, reviews} = props;

    useEffect( () => {

    }, [])

    // const options = { month: 'long'};
    // console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

    const reviewItems = reviews.map( (review, idx) => {
        let month = review.createdAt.getMonth();
        let year = review.createdAt.getFullYear();
        return (
            <li key={idx} className="review-item-container">
                <h2>What I liked:</h2>
                <p>{review.pros}</p>
        
                <h2>What the hotel could do better:</h2>
                <p>{review.cons}</p>
                <div className="review-item-reviewer-info">
                    <p>{review.reviewer.fname}</p>
                    <p>{month + " " + year}</p>
                </div>
            </li>
        )
        // return (<ReviewItem review={review} props={props} key={idx} />)
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