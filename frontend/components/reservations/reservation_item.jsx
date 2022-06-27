import React from "react";

const ReservationItem = props => {
    // console.log(props);

    return (
        <li>
            <p>Name: {props.user.fname + " " + props.user.lname}</p>
            <p>Hotel: </p>
            <p>Check-in: </p>
            <p>Check-out: </p>
            <p>Status: </p>
        </li>
    )
}

export default ReservationItem;