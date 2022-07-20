import React, { useState, useEffect } from "react";

const ReviewForm = props => {
    const {reviewed_hotel_id, reviewer_id, makeReview } = props;
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [rating, setRating] = useState(0);

    useEffect( () => {
        // clear errors?
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        let review = {
            reviewed_hotel_id: reviewed_hotel_id,
            reviewer_id: reviewer_id,
            rating: rating,
            title: title,
            body: body
        }

        makeReview(review);

        // Reset default
        setTitle("");
        setBody("");
        setRating("");
    }

    return (
        <section className="reviews-form-container">
            <div className="reviews-form-content">
                <div className="reviews-form-content-header">
                    <h1>Write a Review!</h1>
                    <h1 onClick={ () => console.log("hello")}>X</h1>      
                </div>
                
                <form onSubmit={handleSubmit} className="reviews-form">
                    <label className="review-form-title">Title:<br></br>
                        <input
                            className="review-form-title-input"
                            type="text"
                            value={title}
                            onChange={ e => setTitle(e.target.value) } 
                        />                    
                    </label>

                    <label className="review-form-body">Review: <br></br>
                        <textarea 
                            className="review-form-body-input"
                            value={body}
                            onChange={ e => setBody(e.target.value) }
                        />
                    </label>

                    <input type="submit" className="review-form-button" />
                </form>
            </div>
        </section>
    )
}

export default ReviewForm;