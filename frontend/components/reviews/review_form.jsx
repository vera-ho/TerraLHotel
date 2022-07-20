import React, { useState, useEffect } from "react";

const ReviewForm = props => {
    // const {reviewed_hotel_id, reviewer_id, makeReview } = props;
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [rating, setRating] = useState(0);

    useEffect( () => {
        // clear errors?

    }, [])

    handleSubmit = e => {
        e.preventDefault();
        let review = {
            // reviewed_hotel_id: reviewed_hotel_id,
            // reviewer_id: reviewer_id,
            rating: rating,
            title: title,
            body: body
        }

        // makeReview(review);

        // Reset default
        setTitle("");
        setBody("");
        setRating("");
    }

    return (
        <section className="reviews-form-container">
            <div className="reviews-form-content">
                <h1 className="reviews-content-title">Write a Review!</h1>
                <form onSubmit={handleSubmit} className="reviews-form">
                    <label className="review-form-title">Title:
                        <input
                            className="review-form-title-input"
                            type="text"
                            value={title}
                            onChange={ e => setTitle(e.target.value) } 
                        />                    
                    </label>

                    <label className="review-form-body">Review: 
                        <input 
                            type="text"
                            className="review-form-body-input"
                            value={body}
                            onChange={ e => setBody(e.target.value) }
                        />
                    </label>
                </form>
            </div>
        </section>
    )
}

export default ReviewForm;