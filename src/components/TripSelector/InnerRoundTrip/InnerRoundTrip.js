import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./InnerRoundTrip.scss";
import ClickAwayListener from "react-click-away-listener";
import types from "../../../util/ActionTypes"
const InnerRoundTrip = (props) => {
  const { SET_ROUND_TRIP } = types
  const dispatch = useDispatch()
  const state = useSelector((state) => state.roundTrip)
  const [roundTrip, setRoundTrip] = useState(state['roundTrip']);

  const handleRoundTripLinkOnClick = (e) => {
    dispatch({
        type: SET_ROUND_TRIP,
        payload: "Round Trip"
    })
    props.handleClickOnLinks()
  };
  const handleOneWayLinkOnClick = (e) => {
    dispatch({
        type: SET_ROUND_TRIP,
        payload: "OneWay"
    })
    props.handleClickOnLinks()
  };
  const handleMutiCityLinkOnClick = (e) => {
    dispatch({
        type: SET_ROUND_TRIP,
        payload: "Muti-City"
    })
    props.handleClickOnLinks()
  };
  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <div className="inner_round_trip_container">
        <ul className="ul_container">
          <li
            onClick={handleRoundTripLinkOnClick}
            className={roundTrip == "Round Trip" ? "focused" : "notFocused"}
            id="round-trip"
          >
            <div id="left">
            {roundTrip == "Round Trip" ? <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                class="nWPnKd NMm5M"
                jsname="Bz112c"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg> : null}
            </div>
            <div id="right">
              <span>Round trip</span>
            </div>
          </li>
          <li
            className={roundTrip == "OneWay" ? "focused" : "notFocused"}
            onClick={handleOneWayLinkOnClick}
            id="one-way"
          >
            <div id="left">
            {roundTrip == "OneWay" ? <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                class="nWPnKd NMm5M"
                jsname="Bz112c"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg> : null}
            </div>
            <div id="right">
              <span>One way</span>
            </div>
          </li>
          <li
            className={roundTrip == "Muti-City" ? "focused" : "notFocused"}
            onClick={handleMutiCityLinkOnClick}
            id="muti-city"
          >
            <div id="left">
            {roundTrip == "Muti-City" ? <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                class="nWPnKd NMm5M"
                jsname="Bz112c"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg> : null}
            </div>
            <div id="right">
              <span>Muti-city</span>
            </div>
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default InnerRoundTrip;
