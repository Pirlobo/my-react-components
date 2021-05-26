import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./InnerClassSelector.scss";
import ClickAwayListener from "react-click-away-listener";
import types from "../../../util/ActionTypes"
const InnerClassSelector = (props) => {
  const { SET_CLASS } = types
  const dispatch = useDispatch()
  const state = useSelector((state) => state.class['class'])
  const [classType, setClassType] = useState(state);
  
  const handleEconomyLinkOnClick = (e) => {
    dispatch({
        type: SET_CLASS,
        payload: "Economy"
    })
    props.handleClickOnLinks()
  };
  const handlePremiumEconomyLinkOnClick = (e) => {
    dispatch({
        type: SET_CLASS,
        payload: "Premium economy"
    })
    props.handleClickOnLinks()
  };
  const handleBusinessLinkOnClick = (e) => {
    dispatch({
        type: SET_CLASS,
        payload: "Business"
    })
    props.handleClickOnLinks()
  };
  const handleFirtClassLinkOnClick = (e) => {
    dispatch({
        type: SET_CLASS,
        payload: "First"
    })
    props.handleClickOnLinks()
  };
  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <div className="inner_class_selector_container">
        <ul className="ul_container">
          <li
            onClick={handleEconomyLinkOnClick}
            className={classType == "Economy" ? "focused" : "notFocused"}
            id="economy"
          >
            <div id="left">
            {classType == "Economy" ? <svg
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
              <span>Economy</span>
            </div>
          </li>
          <li
            className={classType == "Premium economy" ? "focused" : "notFocused"}
            onClick={handlePremiumEconomyLinkOnClick}
            id="premium_economy"
          >
            <div id="left">
            {classType == "Premium economy" ? <svg
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
              <span>Premium economy</span>
            </div>
          </li>
          <li
            className={classType == "Business" ? "focused" : "notFocused"}
            onClick={handleBusinessLinkOnClick}
            id="business"
          >
            <div id="left">
            {classType == "Business" ? <svg
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
              <span>Business</span>
            </div>
          </li>
          
          <li
            className={classType == "First" ? "focused" : "notFocused"}
            onClick={handleFirtClassLinkOnClick}
            id="first"
          >
            <div id="left">
            {classType == "First" ? <svg
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
              <span>First</span>
            </div>
          </li>

        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default InnerClassSelector;
