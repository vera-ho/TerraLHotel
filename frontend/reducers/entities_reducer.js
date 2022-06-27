import usersReducer from "./users_reducer";
import hotelsReducer from "./hotel/hotels_reducer";
import roomsReducer from "./hotel/rooms_reducer";
import { combineReducers } from 'redux';
import reservationsReducer from "./reservations_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    reservations: reservationsReducer,
    hotels: hotelsReducer,
    rooms: roomsReducer
})

export default entitiesReducer;