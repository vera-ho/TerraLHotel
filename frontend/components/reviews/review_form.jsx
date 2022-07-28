import React, { useState } from "react";
import ErrorItem from "../session/error_item";

const ReviewForm = props => {
    const {hotelId, reviewerId, title, review, formType} = props;
    const { closeModal, submitForm } = props;

    let [pros, setPros] = useState(review.pros || "");
    let [cons, setCons] = useState(review.cons || "");
    let [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let reviewObj = {
            reviewed_hotel_id: hotelId,
            reviewer_id: reviewerId,
            pros: pros,
            cons: cons
        }
        if(formType === "edit") reviewObj.id = review.id

        if(pros && !error) {
            submitForm(reviewObj).then(closeModal());
            setError(false)
        } else {
            setError(true)
        }
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
                            placeholder="Required"
                            onChange={ e => setPros(e.target.value) }
                        />
                    </label>
                    <br></br>

                    <label className="review-form-cons">What could the hotel do better? <br></br>
                        <textarea 
                            className="review-form-cons-input"
                            value={cons}
                            placeholder="Optional"
                            onChange={ e => setCons(e.target.value) }
                        />
                    </label>
                    { error && <ErrorItem error="Your likes cannot be empty" /> }
                    <input type="submit" className="review-form-button" />
                </form>
            </div>
        </section>
    )
}

export default ReviewForm;