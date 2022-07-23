import React, { useState } from "react";
import Modal from 'react-modal';

const RoomItem = props => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());

    const handleDateClick = e => {
        e.preventDefault();
        setShowCalendar(true);
        // showCalendar ? setShowCalendar(false) : setShowCalendar(true);
    }

    const handleClick = e => {
        e.preventDefault();

        if(props.loggedIn) {
            let resDetails = {
                room_id: props.room.id,
                customer_id: props.user.id,
                checkin: checkinDate,
                checkout: checkoutDate,
                status: "booked"
            }
            Object.assign(props.reservation, resDetails)
            props.makeReservation(props.reservation);
            window.location = `/#/user/${props.user.id}/stays`;
        } else {
            window.location = `/#/signin`
        }
    }
        
    const datePicker = (
        <div className="room-daterange-picker">
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
                    {/* <button>Check Prices</button> */}
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