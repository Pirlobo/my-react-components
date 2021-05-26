import types from "../util/ActionTypes";

const { SET_ROUND_TRIP } = types;

const initialState = {
    roundTrip : "Round Trip"
};

const roundTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUND_TRIP:
      return {
        ...state,
        roundTrip: action.payload,
      };
    default:
      return state;
  }
};

export default roundTripReducer;
