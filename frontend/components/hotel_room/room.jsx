import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import ErrorItem from "../session/error_item";

const RoomItem = props => {
    const [showCalendar, setShowCalendar] = useState(false);
    const startDate = new Date().toISOString().slice(0,10);

    // Default end date 5 days after start date
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);
    endDate = endDate.toISOString().slice(0,10);
    const [checkinDate, setCheckinDate] = useState(startDate);
    const [checkoutDate, setCheckoutDate] = useState(endDate);

    const handleDateClick = e => {
        e.preventDefault();
        setShowCalendar(true);
    }

    const handleClick = e => {
        e.preventDefault();
        if(!props.loggedIn) {
            window.location = `/#/signin`;
            return;
        }

        let start = new Date(checkinDate).getTime();
        let end = new Date(checkoutDate).getTime();

        let resDetails = {
            room_id: props.room.id,
            customer_id: props.user.id,
            checkin: checkinDate,
            checkout: checkoutDate,
            status: "booked"
        }

        if(start < end) {
            Object.assign(props.reservation, resDetails)
            props.makeReservation(props.reservation);
            window.location = `/#/user/${props.user.id}/stays`;
        }
    }
    
    const datePicker = (
        <div className="room-daterange-picker">
            <h4>Select your dates below</h4>
            <label>
                Check-in date
                <input type="date"
                    value={checkinDate}
                    onChange={ e => setCheckinDate(e.target.value) } 
                />
            </label>
            <label>
                Check-out date
                <input type="date"
                    value={checkoutDate}
                    onChange={ e => setCheckoutDate(e.target.value) } 
                />
            </label>

            <ul>
                { new Date(checkinDate).getTime() >= new Date(checkoutDate).getTime() 
                    && <ErrorItem error="Check in must be before check out!" /> }
            </ul>

            <button onClick={handleClick}>Book Dates</button>
        </div>
    )

    return (
        <div className="room-item-container">
            <section className="room-info">
                <header>
                    <h4 className="room-type">{props.room.roomType}</h4>
                </header>

                <div className="room-info">
                    <p>Amenities</p>
                    <ul>
                        <li>Fits {props.room.occupancy} people</li>
                        <li>{props.room.beds}</li>
                        <li>{props.room.size}</li>
                    </ul>

                    <button onClick={handleDateClick}>Select Dates</button>
                    <Modal
                        className="book-room-modal"
                        isOpen={showCalendar}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => setShowCalendar(false) }
                        ariaHideApp={false}
                        style={{
                            overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }}
                    >
                        {datePicker}
                    </Modal>
                </div>
            </section>

            <section className="room-photo">
                <img src={props.room.img1}
                    alt="hotel-room">
                </img>
            </section>
        </div>
    )
}

export default RoomItem;