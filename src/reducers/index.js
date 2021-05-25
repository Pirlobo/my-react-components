import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import roundTripReducer from './roundTripReducer'

export default combineReducers({
    roundTrip : roundTripReducer,
    counter: counterReducer,
})