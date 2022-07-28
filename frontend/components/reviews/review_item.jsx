import React, { useEffect, useState } from "react";
import ReviewForm from "./review_form";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

const UserReviewItem = props => {
    const { user, review, hotel} = props || {};
    const { editReview, deleteReview } = props;
    const [showModal, setShowModal] = useState(false);

    const handleEditReview = () => {
        setShowModal(true);
    }

    return (
        <li className="user-review-item-container">
            <div>
                <div className="user-review-item-content">
                    <p>
                        <Link to={`/hotels/${hotel.id}`} className="user-review-item-hotel">
                            {hotel.name}
                        </Link>
                    </p>

                    <h2>What you liked:</h2>
                    <p>{review.pros}</p>

                    {review.cons.length > 0 ? (
                        <>
                            <h2>What the hotel could have done better:</h2>
                            <p>{review.cons}</p>
                        </>
                    ) : (
                        <></>
                    )}

                </div>
                <div className="user-review-item-actions">
                    <Link to={{}} onClick={handleEditReview}
                        className='btn'>Edit Review</Link>
                    <Modal
                        className="edit-review-form-modal"
                        isOpen={showModal}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => setShowModal(false) }
                        ariaHideApp={false}
                        style={{
                            overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }}
                    >
                        <ReviewForm
                            closeModal={ () => setShowModal(false) }
                            hotelId={hotel.id}
                            reviewerId={user.id}
                            title={`Update your thoughts for ${hotel.name}!`}
                            submitForm={ review => dispatch(editReview(review))}
                            formType="edit"
                            review={review}
                        />
                    </Modal>
                    
                    <Link to={{}} onClick={() => deleteReview(review.id)} 
                        className='btn'>Delete Review</Link>                       
                </div>
            </div>
        </li>
    )
}

export default UserReviewItem;