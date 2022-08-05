import usersReducer from "./users_reducer";
import hotelsReducer from "./hotel/hotels_reducer";
import roomsReducer from "./hotel/rooms_reducer";
import { combineReducers } from 'redux';
import reservationsReducer from "./reservations_reducer";
import reviewsReducer from "./reviews_reducer";
import searchReducer from "./search_reducer";
import favoritesReducer from "./favorites_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    reservations: reservationsReducer,
    hotels: hotelsReducer,
    searchResults: searchReducer,
    rooms: roomsReducer,
    reviews: reviewsReducer, 
    favorites: favoritesReducer
})

export default entitiesReducer;