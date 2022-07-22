import { connect } from "react-redux";
import { cancelReservation, editReservation, requestAllReservations } from "../../actions/reservation_actions";
import { requestHotel } from "../../actions/hotel_actions"
import ReservationsIndex from "./reservations_index";

const mSTP = (state = {}, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        reservations: state.entities.reservations,
        hotels: state.entities.hotels
    }
}

const mDTP = dispatch => {
    return {
        requestAllReservations: () => dispatch(requestAllReservations()),
        requestHotel: hotelId => dispatch(requestHotel(hotelId)),
        editReservation: reservation => dispatch(editReservation(reservation)),
        cancelReservation: reservationId => dispatch(cancelReservation(reservationId)),
    }
}

export default connect(mSTP, mDTP)(ReservationsIndex);