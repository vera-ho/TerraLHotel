import { RECEIVE_ALL_HOTELS, RECEIVE_HOTEL_SEARCH } from "../actions/hotel_actions";

const searchReducer = (state = null, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_HOTEL_SEARCH:
            return Object.values(action.hotels).length;
        case RECEIVE_ALL_HOTELS:
            return 0;
        default: 
            return state;
    }
}

export default searchReducer;