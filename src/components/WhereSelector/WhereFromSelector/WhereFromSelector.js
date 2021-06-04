import React, { useState, useEffect } from "react";
import "./whereFromSelector.scss";
import InnerWhereFromSelector from "../WhereFromSelector/InnerWhereFromSelector/InnerWhereFromSelector";
import ClickAwayListener from "react-click-away-listener";
import WeatherService from "../../../services/WeatherService";
const WhereFromSelector = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    setIsClicked(true);
  };
  const handleClickAway = () => {
    setIsClicked(false);
  };
  let weatherObject = {
    city: "Ho Chi Minh",
    unit: "imperial",
  };
  let cityObject = {
    city: "Ho Chi M",
  }
  useEffect(() => {
    WeatherService.getWeather(weatherObject).then((response) => {
      console.log(response.data);
    });
    WeatherService.getCities(cityObject).then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="outer_container">
        <div
          className={
            "where_from_selector_container " + (isClicked ? "long" : "short")
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            focusable="false"
            className="IILp3 kmKQme LKTCxe NMm5M"
          >
            <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
          </svg>
          <input
            onClick={handleOnClick}
            type="text"
            className="where_from_selector_input"
            placeholder="Enter name of the airpot"
            value="San Francisco"
          ></input>
          {isClicked ? (
            <button className="plus__icon__button">
              <i id="plus" class="fas fa-plus"></i>
            </button>
          ) : null}
        </div>
        {isClicked ? <InnerWhereFromSelector></InnerWhereFromSelector> : null}
      </div>
    </ClickAwayListener>
  );
};

export default WhereFromSelector;
