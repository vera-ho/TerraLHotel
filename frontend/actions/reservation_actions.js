import * as ReservationUtil from "../util/reservation_api_util"

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

export const receiveAllReservations = reservations => {
    return {
        type: RECEIVE_ALL_RESERVATIONS,
        reservations
    }
}

export const receiveReservation = reservationId => {
    return {
        type: RECEIVE_RESERVATION,
        reservationId
    }
}

export const receiveReservationErrors = errors => {
    return {
        type: RECEIVE_RESERVATION_ERRORS,
        errors
    }
}

export const requestAllReservations = () => dispatch => {
    return ReservationUtil.fetchAllReservations()
        .then( reservations => dispatch(receiveAllReservations(reservations)), 
            errors => dispatch(receiveReservationErrors(errors)))
}

export const requestReservation = reservationId => dispatch => {
    return ReservationUtil.fetchReservation(reservationId)
        .then( reservation => dispatch(receiveReservation(reservation)),
            errors => dispatch(receiveReservationErrors(errors)))
}