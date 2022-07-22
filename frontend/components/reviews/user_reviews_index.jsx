import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { requestAllHotels } from "../../actions/hotel_actions";
import { getUser } from "../../actions/session_actions";
// import UserReviewItemContainer from "./user_review_item_container";

const UserReviewsIndex = props => {
    const { user, getUser } = props;
    const { reviews, requestAllHotels, hotels} = props || {};

    useEffect( () => {
        getUser(user.id);
        requestAllHotels();
    }, [])

    const reviewsList = Object.values(reviews).map( (review, idx) => {
        return (
            <li key={idx}>
                {/* <p>{hotel.name}</p> */}
                <p>pro: {review.pros}</p>
                <p>cons: {review.cons}</p>
                <br></br>
            </li>
            
            // <UserReviewItemContainer review={review} key={idx}
            //     hotel={hotels[review.reviewedHotelId]} />
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
        requestAllHotels: () => dispatch(requestAllHotels())
    }
}

export default connect(mSTP, mDTP)(UserReviewsIndex);
