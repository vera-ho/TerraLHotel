import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            let nextState = Object.assign( {}, state, { [action.userInfo.user.id]: action.userInfo.user });
            return nextState;
            // return Object.assign( {}, state, { [action.userInfo.user.id]: action.userInfo });
        default:
            return state;
    }
}

export default usersReducer;