import { RECEIVE_HOTEL } from "../../actions/hotel_actions";

const roomsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_HOTEL:
            nextState = action.hotel_info.rooms;
            return nextState;
        default:
            return state;
    }
}

export default roomsReducer;