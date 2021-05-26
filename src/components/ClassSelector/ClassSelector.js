import React, { useState, useRef } from "react";
import "./ClassSelector.scss";
import InnerClassSelector from "./InnerClassSelector/InnerClassSelector";
import { useSelector, useDispatch } from "react-redux";
import ClickAwayListener from "react-click-away-listener";
const ClassSelector = () => {
  const refContainer = useRef(null);
  const state = useSelector((state) => state.class["class"]);
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "focusWithoutBorder";
  };
  const handleClickOnLinks = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "focusWithBorder";
  }
  const handleClickAway = (e) => {
    setIsClicked(!isClicked);
    refContainer.current.id = "";
  };
  const removeId = (e) => {
    refContainer.current.id = "";
  };
  return (
      <ClickAwayListener onClickAway={removeId}>
        <div>
        <button
          ref={refContainer}
          onClick={handleOnClick}
          id=""
          className="class_selector_container"
        >
          <span>{state}</span>
          <svg
            id ={isClicked ? "arrow_up" : null}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            focusable="false"
            class=" NMm5M"
          >
            <path d="M7 10l5 5 5-5H7z"></path>
          </svg>
        </button>
        {isClicked ? (
        <InnerClassSelector
        handleClickOnLinks = {handleClickOnLinks}
          handleClickAway={handleClickAway}
        ></InnerClassSelector>
      ) : null}
        </div>
      </ClickAwayListener>
  );
};

export default ClassSelector;
