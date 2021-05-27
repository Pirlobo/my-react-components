import "./App.css";
import HoverDropdown from "./components/Hover-DropDown/DropDown";
import Carousel from "./components/Carousel/Carousel";
import { imageList } from "./props/CarouselProps";
import { Title, Options } from "./props/DropDownProps";
import CustomerSelector from "./components/CustomerSelector/CustomerSelector";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import store from './store'
import TripSelector from "./components/TripSelector/RoundTrip"
import ClassSelector from "./components/ClassSelector/ClassSelector"
import WhereFromSelector from "./components/WhereSelector/WhereFromSelector/WhereFromSelector"
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
      {/* <Carousel imageList= {images}></Carousel>
     <HoverDropdown title={title} options={options}></HoverDropdown>
      <HoverDropdown></HoverDropdown> */}
  
      {/* <CustomerSelector></CustomerSelector> */}
      {/* <ClassSelector></ClassSelector> */}
      {/* <TripSelector></TripSelector> */}
      <WhereFromSelector></WhereFromSelector>
    </Provider>
  );
}

export default App;
