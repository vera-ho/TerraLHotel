import React, { useState } from "react";

const ReviewForm = props => {
    const {hotelId, reviewerId, title, review, formType} = props;
    const { closeModal, submitForm } = props;

    let [pros, setPros] = useState(review.pros || "");
    let [cons, setCons] = useState(review.cons || "");

    const handleSubmit = e => {
        e.preventDefault();
        let reviewObj = {
            reviewed_hotel_id: hotelId,
            reviewer_id: reviewerId,
            pros: pros,
            cons: cons
        }
        if(formType === "edit") reviewObj.id = review.id
        submitForm(reviewObj).then(closeModal());
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
                    <br></br>

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