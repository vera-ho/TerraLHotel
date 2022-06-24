import React from "react";
import RoomItem from "./room";

const RoomsIndex = props => {
    const rooms = Object.values(props.rooms).map( (room, index) => {
        return (
            <RoomItem key={index} room={room} />
        )
    })

    return (
        <aside className="rooms-index-container">
            <h3>Rooms</h3>
            <p>Best price guaranteed.</p>
            <ul>
                {rooms}
            </ul>
        </aside>
    )
}

export default RoomsIndex;