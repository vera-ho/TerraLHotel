import React, { useState } from "react";

const RoomItem = props => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());

    const toggleClick = e => {
        e.preventDefault();
        showCalendar ? setShowCalendar(false) : setShowCalendar(true);
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
            window.location = `/#/user/${props.user.id}`;
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
                    <button onClick={toggleClick}>Select Dates</button>
                </div>

                
            </section>

            <section className="room-photo">
                <img src="https://cdn.discordapp.com/attachments/862515957842706475/990009654094475284/hotel-room-double.jpeg"
                    alt="hotel-room">
                </img>
            </section>

            { showCalendar && datePicker }
        </div>
    )
}

export default RoomItem;