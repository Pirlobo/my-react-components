import './App.css';
import DropDown from './components/DropDown/DropDown';
import Carousel from './components/Carousel/Carousel';
import { imageList } from './props/CarouselProps';
import { Title, Options } from './props/DropDownProps';
function App() {

  // Carousel's props
  let images = imageList;

// DropDown's props
let title = Title
let options = Options;
  return (
    // <Carousel imageList= {images}></Carousel>
    <DropDown title = {title} options = {options}></DropDown>
  );
}

export default App;