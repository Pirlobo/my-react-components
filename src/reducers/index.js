import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import roundTripReducer from './roundTripReducer'
import classReducer from './classReducer'
export default combineReducers({
    roundTrip : roundTripReducer,
    counter: counterReducer,
    class : classReducer,
})