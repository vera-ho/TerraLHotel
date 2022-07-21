import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign( {}, state, { [action.user_info.user.id]: action.user_info.user });
            // return Object.assign( {}, state, { [action.user_info.user.id]: action.user_info });
        default:
            return state;
    }
}

export default usersReducer;