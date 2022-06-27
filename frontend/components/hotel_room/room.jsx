import React from "react";

const RoomItem = props => {

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
                    <button>Check Prices</button>

                </div>
            </section>

            <section className="room-photo">
                <img src="https://cdn.discordapp.com/attachments/862515957842706475/990009654094475284/hotel-room-double.jpeg"
                    alt="hotel-room">
                </img>
            </section>
        </div>
    )
}

export default RoomItem;