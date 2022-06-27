import React, { useEffect } from "react";

const ReservationsIndex = props => {
    useEffect( () => {
        // what is the best way to get all reservations for a single user?
        props.requestAllReservations();
    }, [])

    return (
        <section className="reservations-index-container">
            <header>
                <h3>Your Stays</h3>
            </header>

            <main>
                {/* <p>You have {props.reservations.length} reservations.</p> */}
            </main>
        </section>
    )
}

export default ReservationsIndex;