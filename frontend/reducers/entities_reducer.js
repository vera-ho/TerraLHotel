import usersReducer from "./users_reducer";
import hotelsReducer from "./hotel/hotels_reducer";
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    hotels: hotelsReducer,
})

export default entitiesReducer;