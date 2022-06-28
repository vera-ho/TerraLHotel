import React, { useState } from "react";

const RoomItem = props => {

    let showCalendar = false;
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(new Date());

    const handleClick = e => {
        e.preventDefault();
        showCalendar ? showCalendar = false : showCalendar = true;
    }

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
                    <button onClick={handleClick}>Select Dates</button>
                </div>

                
            </section>

            <section className="room-photo">
                <img src="https://cdn.discordapp.com/attachments/862515957842706475/990009654094475284/hotel-room-double.jpeg"
                    alt="hotel-room">
                </img>
            </section>
            <div className="daterange-picker">
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
            </div>
        </div>
    )
}

export default RoomItem;