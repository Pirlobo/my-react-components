import React, { useState } from "react";
import "./whereToSelector.scss";
import { useDispatch } from "react-redux";
import "./InnerWhereToSelector/innerWhereToSelector.scss";
import ClickAwayListener from "react-click-away-listener";
import PlacesAutocomplete from "react-places-autocomplete";
import types from "../../../util/ActionTypes";
const WhereToSelector = () => {
  const { SET_WHERE_TO } = types;
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    setIsClicked(true);
  };
  const handleClickAway = () => {
    setIsClicked(false);
  };
  const dispatch = useDispatch();

  const [state, setState] = useState({
    address: "",
  });

  const handleChange = (address) => {
    setState({ address });
  };

  const handleSelect = (address) => {
    setState({ address });
    dispatch({
      type: SET_WHERE_TO,
      payload: address,
    });
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="outer_container">
        <div
          className={
            "where_to_selector_container " + (isClicked ? "long" : "short")
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            class="IILp3 oTFJue LKTCxe NMm5M"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
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
                      ? "clicked_where_to_selector_input"
                      : "where_to_selector_input"
                  }
                  {...getInputProps({
                    placeholder: "Where to?",
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
                          <i class="fas fa-history"></i>
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

export default WhereToSelector;
