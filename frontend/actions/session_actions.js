import * as SessionUtil from "../util/session_api_util";
import * as UserUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user_info) => ({
    type: RECEIVE_CURRENT_USER,
    user_info
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = user => dispatch => (
    SessionUtil.login(user)
        .then( user => dispatch(receiveCurrentUser(user)), 
                err => dispatch(receiveErrors(err)) )
);

export const logout = () => dispatch => (
    SessionUtil.logout()
        .then( () => dispatch(logoutCurrentUser()),
              err => dispatch(receiveErrors(err)) ) 
);

export const signup = user => dispatch => (
    UserUtil.createUser(user)
        .then( (user) => dispatch(receiveCurrentUser(user)),
                  err => dispatch(receiveErrors(err)))
);