import React from "react";
import "./flightBooking.scss";
import TripSelector from "../TripSelector/RoundTrip";
import WhereFromSelector from "../WhereSelector/WhereFromSelector/WhereFromSelector"
import WhereToSelector from "../WhereSelector/WhereToSelector/WhereToSelector"

const FlightBooking = () => {
  return (
    <div>
      <h1 style={{textAlign : "center", fontSize : "3rem", fontWeight : "lighter", marginBottom : "2rem"}}>Google Flights</h1>
    <div className="main__container">
      <div className="top__selector">
        <TripSelector></TripSelector>
      </div>
      <div className="bottom_selector">
        <WhereFromSelector></WhereFromSelector>
        <div style = {{marginLeft : ".5rem"}}>
        <WhereToSelector></WhereToSelector>
        </div>
      </div>
      <div className="center__btn">
      <button className="search__btn">
      <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path></svg>
            Search
      </button>
      </div>
    </div>
    </div>
  );
};

export default FlightBooking;
