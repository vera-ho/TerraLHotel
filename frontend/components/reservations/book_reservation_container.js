import { connect } from 'react-redux';
import { makeReservation } from "../../actions/reservation_actions"
import ReservationForm from './reservation_form';

const mSTP = state => {
    return ({
        formType: "Create"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: reservation => dispatch(makeReservation(reservation))
    })
}

export default connect(mSTP, mDTP)(ReservationForm);