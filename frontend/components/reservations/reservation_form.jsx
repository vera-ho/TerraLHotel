import React, { useState } from "react";
import React from "react";

const ReservationForm = props => {
    // expected props/information:
    // --- Room: room type
    // --- Reservation: Check in and out dates
    // --- Hotel: hotel name, city, country
    // --- User: Name, email

    // Set to previously selected dates from room item component
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");

    return (
        <div className="reservation-form-container">
             <section className="reservation-form-left">
                <header>
                    <h4>Welcome back</h4>
                </header>

                <div className="reservation-form-main">
                    <h4>Room & Guests</h4>
                    <div className="reservation-user-info">
                        <h5>Room type</h5>
                        <h5>Free cancellation</h5>

                        <p>Guest</p>
                        <p>Guest Name</p>
                        <p>Guest Email</p>
                    </div>
                    
                    <button onClick={handleSubmit}>Confirm Your Reservation</button>
                </div>
            </section>

            <section className="reservation-form-right">
                <h4>Hotel Name</h4>
                <p>Hotel City, Country</p>

                <p>Check in and out dates</p>
                <p>Number of nights</p>
                <p>Room type and pricing</p>
                <p>Total price</p>
            </section>
        </div>
    )
}

export default ReservationForm;