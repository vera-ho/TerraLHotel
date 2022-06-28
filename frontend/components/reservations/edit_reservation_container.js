import { connect } from 'react-redux';
import { editReservation } from "../../actions/reservation_actions"
import ReservationForm from './reservation_form';

const mSTP = state => {
    return ({
        formType: "Edit"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: reservation => dispatch(editReservation(reservation))
    })
}

export default connect(mSTP, mDTP)(ReservationForm);