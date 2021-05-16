import './App.css';
import DropDown from './components/DropDown/DropDown';
import Carousel from './components/Carousel/Carousel';
function App() {

  // Carousel's props
  let imageList = [ 
  'https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg',
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_newage-min.jpg', 
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_country-min.jpg',
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_christian-min.jpg',
]

// DropDown's props
let title = "Rao Vặt"
let options = [
  {href : "#", opt :  "Đăng việc làm"},
  {href : "#", opt :  "Đăng bài bán nhà"},
]
  return (
    // <Carousel imageList= {imageList}></Carousel>
    <DropDown title = {title} options = {options}></DropDown>
  );
}

export default App;