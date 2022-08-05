import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { RECEIVE_HOTEL } from "../actions/hotel_actions";

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch(action.type) {
        case RECEIVE_FAVORITE: 
            return Object.assign({}, action.favorite);
        case REMOVE_FAVORITE:
            nextState = Object.assign({}, state);
            delete nextState[favoriteId];
            return nextState;
        case RECEIVE_HOTEL:
            nextState = Object.assign({}, action.hotelInfo.favorites);
            return nextState;
        default: 
            return state;
    }
}

export default favoritesReducer;