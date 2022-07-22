import { connect } from "react-redux";
import { cancelReservation, editReservation, requestAllReservations } from "../../actions/reservation_actions";
import { requestHotel } from "../../actions/hotel_actions"
import ReservationsIndex from "./reservations_index";
// import { closeModal, openModal } from "../../actions/modal_actions";

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
        // openModal: modal => dispatch(openModal(modal)), 
        // closeModal: modal => dispatch(closeModal(modal))
        // pullReservation: reservationId => dispatch(pullReservation(reservationId)),
        // requestReservation: reservationId => dispatch(requestReservation(reservationId))
    }
}

export default connect(mSTP, mDTP)(ReservationsIndex);