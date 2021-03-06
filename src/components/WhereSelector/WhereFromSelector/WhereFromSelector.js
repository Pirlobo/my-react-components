import React, { useState, useEffect } from "react";
import "./whereFromSelector.scss";
import { useDispatch} from "react-redux";
import "./InnerWhereFromSelector/innerWhereFromSelector.scss";
import ClickAwayListener from "react-click-away-listener";
import WeatherService from "../../../services/WeatherService";
import PlacesAutocomplete from "react-places-autocomplete";
import types from "../../../util/ActionTypes"
const WhereFromSelector = () => {
  const { SET_WHERE_FROM  } = types
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    setIsClicked(true);
  };
  const handleClickAway = () => {
    setIsClicked(false);
  };
  const dispatch = useDispatch()
  let weatherObject = {
    city: "Ho Chi Minh",
    unit: "imperial",
  };
  let cityObject = {
    city: "Ho Chi M",
  };

  const [state, setState] = useState({
    address: "",
  });

  const handleChange = (address) => {
    setState({ address });
  };

  const handleSelect = (address) => {
    setState({ address });
    dispatch({
      type: SET_WHERE_FROM,
      payload: address
    })
  };

  useEffect(() => {
    // WeatherService.getWeather(weatherObject).then((response) => {
    //   console.log(response.data);
    // });
    // WeatherService.getCities(cityObject).then((response) => {
    //   console.log(response.data);
    // });
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
          <PlacesAutocomplete
            value={state.address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  onClick={handleOnClick}
                  type="text"
                  className={
                    isClicked
                      ? "clicked_where_from_selector_input"
                      : "where_from_selector_input"
                  }
                  {...getInputProps({
                    placeholder: "Where from?",
                  })}
                ></input>

                {isClicked ? (
                  <div className="autocomplete__dropdown__container">
                    {suggestions.map((suggestion) => {
                      return (
                        <div
                          className="input-suggestion"
                          {...getSuggestionItemProps(suggestion)}
                        >
                          <i class="fas fa-plane"></i>
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : null}

                {/* {loading ? null : setAutocomplete(suggestions)} */}
              </div>
            )}
          </PlacesAutocomplete>

          {isClicked ? (
            <button className="plus__icon__button">
              <i id="plus" class="fas fa-plus"></i>
            </button>
          ) : null}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default WhereFromSelector;
