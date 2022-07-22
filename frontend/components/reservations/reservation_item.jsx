import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { checkStay, updateStatus } from "./reservation_mgmt";
// import WriteButtonContainer from "../reviews/write_button";


const ReservationItem = props => {
    const { cancelReservation, requestHotel } = props;
    const { reservation, hotels } = props;
    const { openModal, closeModal } = props;

    // console.log(props);

    useEffect( () => {
        requestHotel(reservation.hotelId);
    }, [])

    const handleCancelClick = e => {
        e.preventDefault();
        cancelReservation(reservation.id);
    }

    const handleWriteReview = () => {
        console.log("Write review!")
        openModal("writeReview");
    }

    const handleEditReview = () => {
        console.log("Edit review!")
        openModal("editReview");
    }

    const hotel = hotels[reservation.hotelId] || {};
    const locale =  navigator.language || navigator.browserLanguage || (navigator.languages || ["en"])[0];
    const checkin = new Date(reservation.checkin);
    const checkout = new Date(reservation.checkout);
    const options = {
        month: "long",
        year: "numeric",
        day: "2-digit"
    }
    const stayed = checkStay(checkout);
    const reviewActions = (
        <div className="reservation-item-review-actions">
            {/* <WriteButtonContainer reservation={reservation} /> */}
            <p onClick={handleWriteReview}>Write Review</p>
            <p onClick={handleEditReview}>Edit Review</p>
        </div>
    )

    if(stayed && reservation.status !== "stayed") updateStatus(reservation);

    return (
        <li className="reservation-item-container">
            <div>
                <p>
                    <Link to={`/hotels/${hotel.id}`} className="reservation-item-hotel">
                        {hotel.name}
                    </Link>
                </p>
                <p>Check-in: {checkin.toLocaleDateString(locale, options)}</p>
                <p>Check-out: {checkout.toLocaleDateString(locale, options)}</p>
                <p>Status: {reservation.status}</p>
            </div>

            <div className="reservation-item-mgmt">
                { stayed ? reviewActions : <></> }
                <div className="reservation-item-actions">
                    <Link to={`/reservation/edit/${reservation.id}`}
                        className="btn">Edit Reservation</Link>
                    <Link to={{}} onClick={handleCancelClick}
                        className="btn">Cancel Reservation</Link>
                </div>
            </div>
        </li>
    )
}

export default ReservationItem;