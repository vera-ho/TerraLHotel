import React, { useEffect, useState } from "react";
import ReservationItem from "./reservation_item";

const ReservationsIndex = props => {

    const numReservations = Object.values(props.reservations).length;
    const [filterValue, setFilterValue] = useState("");

    useEffect( () => {
        props.requestAllReservations();
        // debugger
    }, [])

    const reservationsList = Object.values(props.reservations).map( (reservation, index) => {
        // let filter = filterValue.toLowerCase();
        return (
            <ReservationItem key={index} reservation={reservation} user={props.user}
                requestHotel={props.requestHotel} hotels={props.hotels} />
        )
    })

    return (
        <section className="reservations-index-container">
            <header>
                <h3>Stays</h3>
                <label>Type a keyword to filter for:
                    <input 
                        className=""
                        type="text"
                        value={filterValue}
                        placeholder="Enter Name, Hotel, Status, etc."
                        onChange={ (e) => setFilterValue(e.target.value) }
                    />
                </label>
            </header>

            <main>
                <p>You have {numReservations} reservations.</p>
                <ul>
                    {reservationsList}
                </ul>
            </main>
        </section>
    )
}

export default ReservationsIndex;