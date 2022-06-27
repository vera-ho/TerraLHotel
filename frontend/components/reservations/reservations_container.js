import { connect } from "react-redux";
import { requestAllReservations, requestReservation } from "../../actions/reservation_actions";
import ReservationsIndex from "./reservations_index";

const mSTP = (state) => {
    // use userId to find user? then reservations: user.reservations?
    
    return {
        userId: state.session,
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