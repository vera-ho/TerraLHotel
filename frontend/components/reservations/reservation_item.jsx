import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { checkStay, updateStatus } from "./reservation_mgmt";
import { makeReview } from "../../actions/review_actions";
import ReviewForm from "../reviews/review_form";

const ReservationItem = props => {
    const { cancelReservation, requestHotel } = props;
    const { reservation, hotels } = props;
    const [showModal, setShowModal] = useState(false);

    useEffect( () => {
        requestHotel(reservation.hotelId);
    }, [])

    const handleCancelClick = e => {
        e.preventDefault();
        cancelReservation(reservation.id);
    }

    const handleWriteReview = () => {
        setShowModal(true);
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
                { stayed ? (
                    <div className="reservation-item-actions">
                        <p onClick={handleWriteReview} className="btn">Write Review</p>
                        <Modal
                            className="reservation-write-review-form-modal"
                            isOpen={showModal}
                            shouldCloseOnOverlayClick={true}
                            onRequestClose={() => setShowModal(false) }
                            ariaHideApp={false}
                            style={{
                                overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }}
                        >
                            <ReviewForm
                                closeModal={ () => setShowModal(false) }
                                hotelId={reservation.hotelId}
                                reviewerId={reservation.customerId}
                                title={`Tell us what you think about ${hotel.name}!`}
                                submitForm={ review => dispatch(makeReview(review))}
                                review={{}}
                            />
                        </Modal>
                    </div>
                ) : (
                    <div className="reservation-item-actions">
                        <Link to={`/reservation/edit/${reservation.id}`}
                            className="btn">Edit Reservation</Link>
                        <Link to={{}} onClick={handleCancelClick}
                            className="btn">Cancel Reservation</Link>
                    </div>
                )}
            </div>
        </li>
    )
}

export default ReservationItem;