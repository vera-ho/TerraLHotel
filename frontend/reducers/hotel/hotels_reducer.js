import { RECEIVE_ALL_HOTELS, RECEIVE_HOTEL } from "../../actions/hotel_actions";

const hotelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);
    // debugger
    switch(action.type) {
        case RECEIVE_ALL_HOTELS:
            Object.assign(nextState, action.hotels);
            return nextState;
        case RECEIVE_HOTEL:
            nextState[action.hotel_info.hotel.id] = action.hotel_info.hotel
            return nextState;
        default:
            return state;
    }
}

export default hotelsReducer;