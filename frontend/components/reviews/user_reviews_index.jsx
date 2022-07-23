import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestAllHotels } from "../../actions/hotel_actions";
import { getUser } from "../../actions/session_actions";
import { deleteReview } from "../../actions/review_actions";
// import UserReviewItemContainer from "./user_review_item_container";

const UserReviewsIndex = props => {
    const { requestAllHotels, getUser, deleteReview } = props;
    const { user, reviews, hotels} = props || {};

    useEffect( () => {
        getUser(user.id);
        requestAllHotels();
    }, [])



    const handleEditReview = () => {
        console.log("edit review")
        // open modal
    }

    const reviewsList = Object.values(reviews).map( (review, idx) => {
        const hotel = hotels[review.reviewedHotelId] || {};

        return (
            <li key={idx} className="user-review-item-container">
                <div>
                    <div className="user-review-item-content">
                        <h1>{hotel.name}</h1>
                        <p>What you liked: <br/>
                            {review.pros}</p>
                        <p>What the hotel could have done better: <br/> 
                            {review.cons}</p>
                        <br/>
                    </div>
                    <div className="user-review-item-actions">
                        <Link to={{}} onClick={handleEditReview}
                            className='btn'>Edit Review</Link>
                        
                        <Link to={{}} onClick={() => deleteReview(review.id)} 
                            className='btn'>Delete Review</Link>                       
                    </div>
                </div>
            </li>
        )
    })

    return (
        <section className="user-reviews-index-container">
            <header>
                <h3>Reviews</h3>
            </header>

            <div className="user-reviews-index">
                <ul>
                    {reviewsList}
                </ul>
            </div>
        </section>
    )
}

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        reviews: state.entities.reviews,
        hotels: state.entities.hotels
    }
}

const mDTP = dispatch => {
    return {
        getUser: userId => dispatch(getUser(userId)),
        requestAllHotels: () => dispatch(requestAllHotels()),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default connect(mSTP, mDTP)(UserReviewsIndex);
