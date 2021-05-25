import React, { useState, useRef } from "react";
import "./RoundTrip.scss";
import InnerRoundTrip from "./InnerRoundTrip/InnerRoundTrip";
import { useSelector, useDispatch } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
const RoundTrip = () => {
  const refContainer = useRef(null);
  const state = useSelector((state) => state.roundTrip["roundTrip"]);
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "focus";
  };
  const handleClickAway = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "";
  };
  const removeId = (e) => {
    refContainer.current.id = "";
  };

  const conditionalIcon = (e) => {
    if (state == "RoundTrip") {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          focusable="false"
          class=" NMm5M hhikbc"
        >
          <path d="M22 8l-4-4v3H3v2h15v3l4-4zM2 16l4 4v-3h15v-2H6v-3l-4 4z"></path>
        </svg>
      );
    } else if (state == "OneWay") {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          focusable="false"
          class=" NMm5M hhikbc"
        >
          <path d="M16.79 7.79l-1.41 1.42L17.17 11H3v2h14.17l-1.79 1.79 1.41 1.42L21 12z"></path>
        </svg>
      );
    } else if (state == "MutiCity") {
      return (
        <svg
          enable-background="new 0 0 24 24"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          focusable="false"
          class=" NMm5M hhikbc"
        >
          <g>
            <path d="M11,8c0,0.55-0.45,1-1,1S9,8.55,9,8s0.45-1,1-1S11,7.45,11,8z M6,7C5.45,7,5,7.45,5,8s0.45,1,1,1s1-0.45,1-1S6.55,7,6,7z M14,17c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1s-1,0.45-1,1C13,16.55,13.45,17,14,17z M15.59,5.41L17.17,7L13,7v2l4.17,0l-1.59,1.59 L17,12l4-4l-4-4L15.59,5.41z M8.41,18.59L6.83,17L11,17v-2l-4.17,0l1.59-1.59L7,12l-4,4l4,4L8.41,18.59z M18,17c0.55,0,1-0.45,1-1 c0-0.55-0.45-1-1-1s-1,0.45-1,1C17,16.55,17.45,17,18,17z"></path>
            <rect fill="none" height="24" width="24"></rect>
          </g>
        </svg>
      );
    }
  };
  return (
    <>
      <ClickAwayListener onClickAway={removeId}>
        <button
          ref={refContainer}
          onClick={handleOnClick}
          id=""
          className="round_trip_container"
        >
          {conditionalIcon()}
          <span>{state}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            focusable="false"
            class=" NMm5M"
          >
            <path d="M7 10l5 5 5-5H7z"></path>
          </svg>
        </button>
      </ClickAwayListener>

      {isClicked ? (
        <InnerRoundTrip
          handleOnClick={handleOnClick}
          handleClickAway={handleClickAway}
        ></InnerRoundTrip>
      ) : null}
    </>
  );
};

export default RoundTrip;
