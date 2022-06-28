import React, { useEffect } from "react";

const ReservationItem = props => {

    useEffect( () => {
        props.requestHotel(props.reservation.hotelId);
    }, [])

    const hotel = props.hotels[props.reservation.hotelId];
    console.log("Hotel: " + hotel);

    const handleCancelClick = e => {
        e.preventDefault();
        props.cancelReservation(props.reservation.id);
    }

    if(!hotel) return <p>Loading...</p>
    return (
        <li>
            <div>
                <p>Name: {props.user.fname + " " + props.user.lname}</p>
                <p>Hotel: {hotel.name}</p>
                <p>Check-in: {props.reservation.checkin}</p>
                <p>Check-out: {props.reservation.checkout}</p>
                <p>Status: {props.reservation.status}</p>
            </div>
            <div>
                <button >Edit Reservation</button>
                <button onClick={handleCancelClick}>Cancel Reservation</button>
            </div>
        </li>
    )
}

export default ReservationItem;