import { connect } from "react-redux";
import { requestAllReservations, requestReservation } from "../../actions/reservation_actions";
import ReservationsIndex from "./reservations_index";

// path: /account/stays
// const mSTP = (state) => {
//     // use userId to find user? then reservations: user.reservations?
    let current_user;
    Object.values(state.entities.users).forEach( (user) => {
        if(user.id === state.session.id) {
            current_user = user
        }
    })

//     return {
//         user: current_user,
//         reservations: state.entities.reservations
//     }
// }

const mSTP = (state = {}, ownProps) => {
    return {
        user: current_user,
        reservations: state.entities.reservations
    }
}

const mDTP = dispatch => {
    return {
        requestAllReservations: () => dispatch(requestAllReservations()),
        requestReservation: reservationId => dispatch(requestReservation(reservationId))
    }
}

export default connect(mSTP, mDTP)(ReservationsIndex);