import { 
        RECEIVE_ALL_RESERVATIONS, 
        RECEIVE_RESERVATION,
        REMOVE_RESERVATION
    } from "../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            Object.assign(nextState, action.userInfo.reservations)
            return nextState;
        case RECEIVE_ALL_RESERVATIONS:
            Object.assign(nextState, action.reservations);
            return nextState;
        case REMOVE_RESERVATION:
            delete nextState[action.reservationId];
            return nextState;
        case RECEIVE_RESERVATION: 
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;