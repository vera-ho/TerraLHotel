import React, { useEffect } from "react";

const ReservationItem = props => {

    useEffect( () => {
        props.requestHotel(props.reservation.hotelId);
    }, [])


    const handleCancelClick = e => {
        e.preventDefault();
        props.cancelReservation(props.reservation.id);
    }

    const hotel = props.hotels[props.reservation.hotelId];

    const locale =  navigator.language || navigator.browserLanguage || (navigator.languages || ["en"])[0];
    const checkin = new Date(props.reservation.checkin);
    const checkout = new Date(props.reservation.checkout);
    const options = {
        month: "long",
        year: "numeric",
        day: "2-digit"
    }
 
    if(!hotel) return <p>Loading...</p>
    return (
        <li>
            <div>
                <p>Name: {props.user.fname + " " + props.user.lname}</p>
                <p>Hotel: {hotel.name}</p>
                <p>Check-in: {checkin.toLocaleDateString(locale, options)}</p>
                <p>Check-out: {checkout.toLocaleDateString(locale, options)}</p>
                <p>Status: {props.reservation.status}</p>
            </div>
            <div>
                <button to={`/reservation/edit/${props.reservation.id}`}>Edit Reservation</button>
                <button onClick={handleCancelClick}>Cancel Reservation</button>
            </div>
        </li>
    )
}

export default ReservationItem;