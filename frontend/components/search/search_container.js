import { connect } from "react-redux";
import Search from "./search"
import { searchHotels } from "../../actions/hotel_actions";

const mapDispatchToProps = dispatch => {
    return {
        searchHotels: searchParam => dispatch(searchHotels(searchParam))
    }
}

export default connect(null, mapDispatchToProps)(Search);