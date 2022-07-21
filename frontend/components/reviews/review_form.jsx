import React, { useState, useEffect } from "react";

const ReviewForm = props => {
    const {reviewed_hotel_id, reviewer_id, makeReview } = props;
    let [title, setTitle] = useState("");
    let [pros, setPros] = useState("");
    let [cons, setCons] = useState("");
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
            pros: pros,
            cons: cons
        }

        makeReview(review);

        // Reset default
        setTitle("");
        setPros("");
        setCons("");
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

                    <label className="review-form-pros">What did you like? <br></br>
                        <textarea 
                            className="review-form-pros-input"
                            value={pros}
                            onChange={ e => setPros(e.target.value) }
                        />
                    </label>

                    <label className="review-form-cons">What could the hotel do better? <br></br>
                        <textarea 
                            className="review-form-cons-input"
                            value={cons}
                            onChange={ e => setCons(e.target.value) }
                        />
                    </label>

                    <input type="submit" className="review-form-button" />
                </form>
            </div>
        </section>
    )
}

export default ReviewForm;