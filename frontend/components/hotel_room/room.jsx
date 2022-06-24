import React from "react";

const RoomItem = props => {

    return (
        <div className="room-item-container">
            <p>{props.room.roomType}</p>
            <p>Amenities</p>
            <p>Fits {props.room.occupancy} people</p>
            <p>{props.room.size}</p>
        </div>
    )
}

export default RoomItem;