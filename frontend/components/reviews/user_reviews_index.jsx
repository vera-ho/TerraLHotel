import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getUser } from "../../actions/session_actions";

const UserReviewsIndex = props => {

    const { user, getUser } = props;

    console.log(props)
     
    useEffect( () => {
        getUser(user.id);
    }, [])

    // const reviewsList = Object.values(props.reviews).map( (review, index) => {

    //     return (
    //         <div>

    //         </div>
    //     )
    // })

    return (
        <section className="user-reviews-index-container">
            <header>
                <h3>Reviews</h3>
            </header>

            <main>
                {/* <p>You have {numReservations} reservations.</p> */}
                <ul>
                    {/* {reviewsList} */}
                </ul>
            </main>
        </section>
    )
}

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        reviews: state.entities.reviews
    }
}

const mDTP = dispatch => {
    return {
        getUser: userId => dispatch(getUser(userId))
    }
}

export default connect(mSTP, mDTP)(UserReviewsIndex);
