import React, { useState, useEffect, useRef } from "react";
import "./customerSelector.scss";
import InnerDropDown from "./InnerDropDown/InnerDropDown";
import { useSelector } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
import ClassSelector from "../ClassSelector/ClassSelector";
const DropDown = () => {
  const refContainer = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "focusWithoutBorder";
  };
  const handleClickOnLinks = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "focusWithBorder";
  };
  const handleClickAway = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "";
  };
  const removeId = (e) => {
    refContainer.current.id = "";
  };
  const [totalCustomer, setTotalCustomer] = useState(0);
  const state = useSelector((state) => state.counter.counter);
  useEffect(() => {
    let total = 0;
    for (var property in state) {
      if (state[property]) total += state[property];
    }
    setTotalCustomer(total);
  }, [state]);

  return (
      <div>
        <div className="row">
        <ClickAwayListener onClickAway={removeId}>
          <button
            ref={refContainer}
            onClick={handleOnClick}
            className={
              "flight_dropdown_container " + (isClicked ? "btn_focus" : null)
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              focusable="false"
              class=" NMm5M"
            >
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
            </svg>

            <span>{totalCustomer}</span>
            <svg
              id={isClicked ? "arrow_up" : null}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              focusable="false"
              className="NMm5M"
            >
              <path d="M7 10l5 5 5-5H7z"></path>
            </svg>
          </button>
          </ClickAwayListener>
          <div className="margin__left">
            <ClassSelector></ClassSelector>
          </div>
        </div>
        {isClicked ? (
          <InnerDropDown
            handleClickOnLinks={handleClickOnLinks}
            handleClickAway={handleClickAway}
          ></InnerDropDown>
        ) : null}
      </div>
  );
};

export default DropDown;
