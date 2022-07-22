import React, { useEffect, useState } from "react";

const UserReviewsIndex = props => {

    const reviewsList = Object.values(props.reviews).map( (review, index) => {

        return (
            <div>
                
            </div>
        )
    })

    return (
        <section className="user-reviews-index-container">
            <header>
                <h3>Reviews</h3>
            </header>

            <main>
                {/* <p>You have {numReservations} reservations.</p> */}
                <ul>
                    {reviewsList}
                </ul>
            </main>
        </section>
    )
}

export default UserReviewsIndex;