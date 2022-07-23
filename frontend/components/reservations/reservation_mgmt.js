import { editReservation } from "../../actions/reservation_actions";

export const checkStay = checkout => {
    const stayed = checkout.getTime() < Date.now();
    return stayed;
}

export const updateStatus = reservation => {
    // let update = Object.assign({}, reservation);
    reservation.status = "stayed";
    editReservation(reservation);
}