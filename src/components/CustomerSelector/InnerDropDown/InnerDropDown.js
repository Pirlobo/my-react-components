import React, { useState } from "react";
import "./InnerDropDown.scss";
import { useDispatch, useSelector } from "react-redux"
import types from "../../../util/ActionTypes"
import ClickAwayListener from 'react-click-away-listener';
const InnerDropDown = (props) => {
const state = useSelector((state) => state.counter.counter)
  const [counter, setCounter] = useState({
    adults: state['adults'],
    childrent: state['childrent'],
    infantsInSeat: state['infantsInSeat'],
    infantsOnLap: state['infantsOnLap'],
  });
  const { SET_NUMBER_CUSTOMER } = types
  const dispatch = useDispatch()

  const handleAdultsIncrement = (e) => {
    setCounter({ ...counter, adults: counter.adults + 1 });
  };
  const handleChildrentIncrement = (e) => {
    setCounter({ ...counter, childrent: counter.childrent + 1 });
  };
  const handleInfantsInSeatIncrement = (e) => {
    setCounter({ ...counter, infantsInSeat: counter.infantsInSeat + 1 });
  };
  const handleInfantsOnLapIncrement = (e) => {
    setCounter({ ...counter, infantsOnLap: counter.infantsOnLap + 1 });
  };

  const handleAdultsDecrement = (e) => {
    if (counter.adults > 1) {
        setCounter({ ...counter, adults: counter.adults -1 });
    }
  };
  const handleChildrentDecrement = (e) => {
    if (counter.childrent > 0) {
        setCounter({ ...counter, childrent: counter.childrent -1 });
    }
  };
  const handleInfantsInSeatDecrement = (e) => {
    if (counter.infantsInSeat > 0) {
        setCounter({ ...counter, infantsInSeat: counter.infantsInSeat -1 });
    }
  };
  const handleInfantsOnLapDecrement = (e) => {
    if (counter.infantsOnLap > 0) {
        setCounter({ ...counter, infantsOnLap: counter.infantsOnLap -1 });
    }
  };

  const handleSubmit = (e) => {
      dispatch({
          type: SET_NUMBER_CUSTOMER,
          payload: counter 
      })
      props.handleClickOnLinks()
  }

  const handleOnCancel = (e) => {
    props.handleClickOnLinks()
  }

  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
     <div className="inner_drop_down_container">
      <ul className="ul-container">
        <li id="adult">
          <div className="left">
            <div>Adults</div>
          </div>
          <div className="right">
            <button onClick={handleAdultsDecrement} id={(counter.adults > 1 ? "plus" : "minus")}>
              <i class={"fas fa-minus " + (counter.adults > 1 ? "second-color-fa-minus" : null) }></i>
            </button>
            <span>{counter.adults}</span>
            <button onClick={handleAdultsIncrement} id="plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </li>

        <li id="childrent">
          <div className="left">
            <span>Children</span>
            <span>Aged 2 - 12</span>
          </div>
          <div className="right">
            <button  onClick={handleChildrentDecrement} id={(counter.childrent > 0 ? "plus" : "minus")}>
            <i class={"fas fa-minus " + (counter.childrent > 0 ? "second-color-fa-minus" : null) }></i>
            </button>
            <span>{counter.childrent}</span>
            <button onClick={handleChildrentIncrement} id="plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </li>
        <li id="infant_in_seat">
          <div className="left">
            <span>Infants</span>
            <span>In seat</span>
          </div>
          <div className="right">
            <button onClick={handleInfantsInSeatDecrement} id={(counter.infantsInSeat > 0 ? "plus" : "minus")}>
            <i class={"fas fa-minus " + (counter.infantsInSeat > 0 ? "second-color-fa-minus" : null) }></i>
            </button>
            <span>{counter.infantsInSeat}</span>
            <button onClick={handleInfantsInSeatIncrement} id="plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </li>
        <li id="infant_on_lap">
          <div className="left">
            <span>Infants</span>
            <span>On lap</span>
          </div>
          <div className="right">
            <button onClick={handleInfantsOnLapDecrement} id={(counter.infantsOnLap > 0 ? "plus" : "minus")}>
            <i class={"fas fa-minus " + (counter.infantsOnLap > 0 ? "second-color-fa-minus" : null) }></i>
            </button>
            <span>{counter.infantsOnLap}</span>
            <button onClick={handleInfantsOnLapIncrement}  id="plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </li>
      </ul>
      <div className="operations">
        <button onClick = {handleOnCancel}>Cancel</button>
        <button onClick={handleSubmit}>Finish</button>
      </div>
    </div>
    </ClickAwayListener>
   
  );
};

export default InnerDropDown;
