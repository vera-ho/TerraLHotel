import { connect } from "react-redux";
import HotelMap from "./map";
import * as MapUtil from "../../util/map_api_util";

const mSTP = state => {
    return { 
        latlng: {}
    }
}

const mDTP = dispatch => {
    return {
        getLatLng: url => dispatch(MapUtil.getLatLng(url))
    }
}

export default connect(mSTP, mDTP)(HotelMap);