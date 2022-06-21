import { connect } from "react-redux";
import { receiveAllHotels, receiveHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel"

const mSTP = state => {
    
    return {
        hotelState: state
    }
}

const mDTP = dispatch => {
    return {
        receiveAllHotels: () => dispatch(receiveAllHotels()),
        receiveHotel: hotel => dispatch(receiveHotel(hotel))
    }
}

export default connect(mSTP, mDTP)(Hotel);