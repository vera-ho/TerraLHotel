import sessionErrorsReducer from './session_errors_reducer';
import hotelErrorsReducer from './hotel/hotel_errors_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    hotel: hotelErrorsReducer,
    reservation: reservationErrorsReducer
})

export default errorsReducer;