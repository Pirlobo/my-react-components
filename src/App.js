import "./App.css";
import HoverDropdown from "./components/Hover-DropDown/DropDown";
import Carousel from "./components/Carousel/Carousel";
import { imageList } from "./props/CarouselProps";
import { Title, Options } from "./props/DropDownProps";
import Dropdown from "./components/Dropdown/DropDown";
import { Provider } from "react-redux";
import Helmet from "react-helmet";
import store from './store'
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
     <HoverDropdown title={title} options={options}></HoverDropdown> */}
      <Dropdown></Dropdown>
    </Provider>
  );
}

export default App;
