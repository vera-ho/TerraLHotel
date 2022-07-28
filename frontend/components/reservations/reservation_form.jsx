import React, { useEffect, useState } from "react";

const ReservationForm = props => {
    // expected props/information:
    // --- Room: room type
    // --- Reservation: Check in and out dates
    // --- Hotel: hotel name, city, country
    // --- User: Name, email
    const { hotel, room, user, reservation } = props || {};
    const { editReservation } = props;

    // Set to previously selected dates from room item component
    const startDate = new Date(reservation.checkin).toISOString().slice(0,10);
    const endDate = new Date(reservation.checkout).toISOString().slice(0,10);
    const [checkin, setCheckin] = useState(startDate);
    const [checkout, setCheckout] = useState(endDate);

    const handleSubmit = e => {
        e.preventDefault();
        const editedReservation = {
            id: reservation.id,
            hotelId: hotel.id,
            customerId: user.id,
            roomId: reservation.roomId,
            checkin: checkin,
            checkout: checkout,
            status: "updated"
        }
        editReservation(editedReservation);
        window.location = `/#/user/${user.id}/stays`
    }

    let checkinDate, checkoutDate;
    const locale =  navigator.language || navigator.browserLanguage || (navigator.languages || ["en"])[0];
    const options = {
        month: "long",
        year: "numeric",
        day: "2-digit"
    }

    checkinDate = new Date(reservation.checkin);
    checkoutDate = new Date(reservation.checkout);
    checkinDate = checkinDate.toLocaleDateString(locale, options);
    checkoutDate = checkoutDate.toLocaleDateString(locale, options);

    const datePicker = (
        <div className="edit-reservation-daterange-picker">
            <label>
                Check-in date
                <input type="date"
                    value={checkin}
                    onChange={ e => setCheckin(e.target.value) } 
                />
            </label>
            <label>
                Check-out date
                <input type="date"
                    value={checkout}
                    onChange={ e => setCheckout(e.target.value) } 
                />
            </label>
            <button onClick={handleSubmit}>Confirm Reservation Updates</button>
        </div>
    )

    return (
        <div className="reservation-form-container">
             <section className="reservation-form-left">
                <header>
                    <h4>Welcome back, {user.fname}</h4>
                </header>

                <div className="reservation-form-main">
                    <h4>Room & Guests</h4>
                    <p>Please verify guest and reservation information.</p>
                    <div className="reservation-user-info">
                        {/* <h5>Room type </h5>
                        <h5>Free cancellation</h5> */}

                        <p>Guest</p>
                        <p>{user.fname + " " + user.lname}</p>
                        <p>{user.email}</p>
                    </div>
                    {/* <p>Number of nights</p>
                    <p>Room type and pricing</p> */}
                    <p>Total price: ${(Math.random()* 10000 + 500).toFixed(2)}</p>
                </div>
            </section>

            <section className="reservation-form-right">
                <h4>{hotel.name}</h4>
                <p>{hotel.city + ", " + hotel.country}</p>
                {/* <p>Booked Dates:</p> */}
                <p>{checkinDate + " - " + checkoutDate}</p>
                {datePicker}
            </section>
        </div>
    )
}

export default ReservationForm;