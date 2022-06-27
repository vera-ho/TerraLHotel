import { connect } from "react-redux";
import { requestAllReservations, requestReservation } from "../../actions/reservation_actions";
import ReservationsIndex from "./reservations_index";

const mSTP = (state = {}, ownProps) => {
    // console.log(state.entities.users[ownProps.match.params.userId])
    // debugger
    return {
        user: state.entities.users[ownProps.match.params.userId],
        reservations: state.entities.reservations
    }
}

const mDTP = dispatch => {
    return {
        requestAllReservations: () => dispatch(requestAllReservations()),
        requestReservation: reservationId => dispatch(requestReservation(reservationId)),
        
    }
}

export default connect(mSTP, mDTP)(ReservationsIndex);