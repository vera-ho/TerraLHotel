import { RECEIVE_HOTEL } from "../actions/hotel_actions";
import {
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from "../actions/review_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign( {}, state);

    switch(action.type) {
        case RECEIVE_HOTEL:
            nextState = Object.assign({}, action.hotel_info.reviews);
            return nextState;
        case RECEIVE_REVIEW: 
            nextState[action.review.id] = action.review;
            return nextState;
        case REMOVE_REVIEW: 
            delete nextState[action.reviewId];
            return nextState;
        case RECEIVE_CURRENT_USER:
            Object.assign(nextState, action.user_info.reviews);
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;