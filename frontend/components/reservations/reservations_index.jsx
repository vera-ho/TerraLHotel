import React, { useEffect, useState } from "react";
import ReservationItem from "./reservation_item";

const ReservationsIndex = props => {

    const numReservations = Object.values(props.reservations).length;
    const [filterValue, setFilterValue] = useState("");

    useEffect( () => {
        props.requestAllReservations();
    }, [])

    const reservationsList = Object.values(props.reservations).map( (reservation, index) => {
        let filter = filterValue.toLowerCase();
        let hotel = props.hotels[reservation.hotelId];

        if(reservation.status.toLowerCase().includes(filter) ||
            props.user.fname.toLowerCase().includes(filter) ||
            props.user.lname.toLowerCase().includes(filter) ||
            hotel.name.toLowerCase().includes(filter)
        ) {
            return (
                <ReservationItem key={index} reservation={reservation} user={props.user}
                    requestHotel={props.requestHotel} hotels={props.hotels} 
                    editReservation={props.editReservation}
                    cancelReservation={props.cancelReservation} />
                    // openModal = {props.openModal}
                    // closeModal = {props.closeModal} />
            )
        }
    })

    return (
        <section className="reservations-index-container">
            <header>
                <h3>Stays</h3>
                <label>Type a keyword to filter for:
                    <input 
                        className="reservation-filter"
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