import React, { useEffect } from "react";
import UserReviewItem from "./review_item";
import { connect } from 'react-redux';
import { requestAllHotels } from "../../actions/hotel_actions";
import { getUser } from "../../actions/session_actions";
import { editReview, deleteReview } from "../../actions/review_actions";

const UserReviewsIndex = props => {
    const { requestAllHotels, getUser, deleteReview } = props;
    const { user, reviews, hotels} = props || {};
    const numReviews = Object.values(reviews).length;

    useEffect( () => {
        getUser(user.id);
        requestAllHotels();
    }, [])

    const reviewsList = Object.values(reviews).map( (review, idx) => {
        const hotel = hotels[review.reviewedHotelId] || {};

        return (
            <UserReviewItem 
                hotel={hotel}
                review={review}
                user={user}
                deleteReview={deleteReview}
                editReview={editReview}
                key={idx}
            />
        )
    })

    return (
        <section className="user-reviews-index-container">
            <header>
                <h3>Reviews</h3>
            </header>

            <div className="user-reviews-index">
                <p>You have {numReviews} reviews.</p>
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