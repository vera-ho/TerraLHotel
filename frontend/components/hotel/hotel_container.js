import { connect } from "react-redux";
import { requestAllHotels, receiveHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel"

const mSTP = state => {
    
    return {
        hotels: state.entities.hotels
    }
}

const mDTP = dispatch => {
    return {
        requestAllHotels: () => dispatch(requestAllHotels()),
        receiveHotel: hotel => dispatch(receiveHotel(hotel))
    }
}

export default connect(mSTP, mDTP)(Hotel);