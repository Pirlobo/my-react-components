import types from "../util/ActionTypes";

const { SET_NUMBER_CUSTOMER, CANCEL } = types;

const initialState = {
  counter: {
    adults: 1,
    childrent: 0,
    infantsInSeat: 0,
    infantsOnLap: 0,
  },
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_CUSTOMER:
      return {
        ...state,
        counter: action.payload,
      };
    case CANCEL:
        return {
          ...state
        };

    default:
      return state;
  }
};

export default errorReducer;
