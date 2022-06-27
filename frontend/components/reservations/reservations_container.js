import { connect } from "react-redux";
import { requestAllReservations, requestReservation } from "../../actions/reservation_actions";
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
        requestReservation: reservationId => dispatch(requestReservation(reservationId)),
        requestHotel: hotelId => dispatch(requestHotel(hotelId))
    }
}

export default connect(mSTP, mDTP)(ReservationsIndex);