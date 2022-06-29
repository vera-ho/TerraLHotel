import { connect } from 'react-redux';
import { editReservation } from "../../actions/reservation_actions";
import ReservationForm from './reservation_form';

const mSTP = (state, ownProps) => {
    const reservationId = ownProps.match.params.reservationId;
    const reservation = state.entities.reservations[reservationId];

    return ({
        hotel: state.entities.hotels[reservation.hotelId],
        room: state.entities.rooms[reservation.roomId],
        user: state.entities.users[state.session.id],
        reservation: reservation
    })
}

const mDTP = dispatch => {
    return ({
        editReservation: reservation => dispatch(editReservation(reservation))
    })
}

export default connect(mSTP, mDTP)(ReservationForm);