import { connect } from "react-redux";
import { requestAllHotels, searchHotels } from "../../actions/hotel_actions";
import { selectAllHotels } from "../../reducers/selectors";
import HotelsIndex from "./hotels_index"

const mSTP = state => {
    return {
        // hotels: state.entities.hotels
        hotels: selectAllHotels(state)
    }
}

const mDTP = dispatch => {
    return {
        // requestAllHotels: () => dispatch(requestAllHotels()),
        searchHotels: searchParam => dispatch(searchHotels(searchParam))
    }
}

export default connect(mSTP, mDTP)(HotelsIndex);