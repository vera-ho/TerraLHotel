import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION } from "../actions/reservation_actions";

const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            Object.assign(nextState, action.reservations);
            return nextState;
        case RECEIVE_RESERVATION: 
            nextState[action.reservations.id] = action.reservations;
        default:
            return state;
    }
}

export default reservationsReducer;