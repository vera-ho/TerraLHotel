import React from "react";
import RoomItem from "./room";

const RoomsIndex = props => {
    const rooms = Object.values(props.rooms).map( (room, index) => {
        return (
            <RoomItem key={index} room={room} 
                makeReservation={props.makeReservation} 
                reservation={props.reservation} 
                loggedIn={props.loggedIn}
                user={props.user} 
            />
        )
    })

    // Bonus functionality
    let datesSelected = null;
    const roomsHeader = (datesSelected) ? (
        <></>
    ) : (
        <h3>Rooms</h3>
    )

    return (
        <aside className="rooms-index-container">
            <header>
                {roomsHeader}
                <p>Best price guaranteed.</p>
            </header>
           
            <ul>
                {rooms}
            </ul>
        </aside>
    )
}

export default RoomsIndex;