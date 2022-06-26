import { RECEIVE_RESERVATION, RECEIVE_RESERVATION_ERRORS } from "../actions/reservation_actions";

const reservationErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_RESERVATION_ERRORS:
            Object.assign(nextState, action.errors);
            return nextState;
        case RECEIVE_RESERVATION:
            return {};
        default:
            return state;
    }
}

export default reservationErrorsReducer;