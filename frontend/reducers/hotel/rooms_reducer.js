import { RECEIVE_HOTEL } from "../../actions/hotel_actions";

const roomsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_HOTEL:
            // debugger
            nextState = action.hotel.hotel_rooms;
            return nextState;
        default:
            return state;
    }
}

export default roomsReducer;