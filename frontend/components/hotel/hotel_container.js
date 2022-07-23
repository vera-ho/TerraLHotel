import { connect } from "react-redux";
import { requestHotel } from "../../actions/hotel_actions";
import { makeReservation } from "../../actions/reservation_actions";
import Hotel from "./hotel"

const mSTP = (state, ownProps) => {
    return {
        hotel: state.entities.hotels[ownProps.match.params.hotelId],
        reviews: state.entities.reviews,
        rooms: state.entities.rooms,
        loggedIn: Boolean(state.session.id),
        user: state.entities.users[state.session.id]       
    }
}

const mDTP = dispatch => {
    return {
        requestHotel: (hotel) => dispatch(requestHotel(hotel)),
        makeReservation: (reservation) => dispatch(makeReservation(reservation))
    }
}

export default connect(mSTP, mDTP)(Hotel);