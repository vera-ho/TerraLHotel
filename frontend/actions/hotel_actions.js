import * as HotelUtil from "../util/hotel_api_util"

export const RECEIVE_ALL_HOTELS = "RECEIVE_ALL_HOTELS";
export const RECEIVE_HOTEL = "RECEIVE_HOTEL";
export const RECEIVE_HOTEL_ERRORS = "RECEIVE_HOTEL_ERRORS";

export const receiveAllHotels = hotels => {
    return {
        type: RECEIVE_ALL_HOTELS,
        hotels
    }
}

export const receiveHotel = hotelInfo => {
    return {
        type: RECEIVE_HOTEL,
        hotelInfo
    }
}

export const receiveHotelErrors = errors => {
    return {
        type: RECEIVE_HOTEL_ERRORS,
        errors
    }
}

export const requestAllHotels = () => dispatch => {
    return HotelUtil.fetchAllHotels()
        .then( hotels => dispatch(receiveAllHotels(hotels)), 
            err => dispatch(receiveHotelErrors(err)))
}

export const requestHotel = hotelId => dispatch => {
    return HotelUtil.fetchHotel(hotelId)
        .then( hotelInfo => dispatch(receiveHotel(hotelInfo)), 
            err => dispatch(receiveHotelErrors(err)))
}

export const searchHotels = searchParam => dispatch => {
    return HotelUtil.searchHotels(searchParam)
        .then( hotels => dispatch(receiveAllHotels(hotels)),
            err => dispatch(receiveHotelErrors(err)))
}