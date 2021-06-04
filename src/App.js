import "./App.css";
import HoverDropdown from "./components/Hover-DropDown/DropDown";
import Carousel from "./components/Carousel/Carousel";
import { imageList } from "./props/CarouselProps";
import { Title, Options } from "./props/DropDownProps";
import CustomerSelector from "./components/CustomerSelector/CustomerSelector";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import store from "./store";
import FlightBooking from "./components/FlightBooking/FlightBooking";
function App() {
  // Carousel's props
  let images = imageList;

  // DropDown's props
  let title = Title;
  let options = Options;

  return (
    <Provider store={store}>
      <Helmet>
        <title>My Components</title>
      </Helmet>
      {/* <Carousel imageList= {images}></Carousel> */}
      {/* <WhereFromSelector></WhereFromSelector> */}
      {/* <HoverDropdown title={title} options={options}></HoverDropdown> */}
      <FlightBooking>
      </FlightBooking>
    </Provider>
  );
}

export default App;
