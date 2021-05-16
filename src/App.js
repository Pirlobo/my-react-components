import './App.css';
import DropDown from './components/DropDown/DropDown';
import Carousel from './components/Carousel/Carousel';
function App() {
  let imageList = [ 
  'https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg',
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_newage-min.jpg', 
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_country-min.jpg',
  'https://www.musicnotes.com/images2/promos/store/900x520_piano_christian-min.jpg',
]
  return (
    <Carousel imageList= {imageList}></Carousel>
    {/* <DropDown></DropDown> */}
  );
}

export default App;