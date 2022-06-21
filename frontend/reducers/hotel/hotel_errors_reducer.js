import { RECEIVE_HOTEL, RECEIVE_HOTEL_ERRORS } from "../../actions/hotel_actions";

const hotelErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( [], state);

    switch(action.type) {
        case RECEIVE_HOTEL_ERRORS:
            return Object.assign(nextState, action.errors);
        case RECEIVE_HOTEL:
            return [];
        default:
            return state;
    }
}

export default hotelErrorsReducer;