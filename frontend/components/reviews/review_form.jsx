import React, { useState, useEffect } from "react";

const ReviewForm = props => {
    const {reviewed_hotel_id, reviewer_id, submitForm, closeModal } = props;
    const { title } = props;

    let [pros, setPros] = useState(pros);
    let [cons, setCons] = useState(cons);

    const handleSubmit = e => {
        e.preventDefault();
        let review = {
            reviewed_hotel_id: reviewed_hotel_id,
            reviewer_id: reviewer_id,
            pros: pros,
            cons: cons
        }

        submitForm(review).then(closeModal());
    }

    return (
        <section className="reviews-form-container">
            <div className="reviews-form-content">
                <div className="reviews-form-content-header">
                    <h1>{title}</h1>
                    <h1 onClick={closeModal}>X</h1>      
                </div>
                
                <form onSubmit={handleSubmit} className="reviews-form">
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