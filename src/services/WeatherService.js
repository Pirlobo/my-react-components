import axios from "axios";
const weatherSearchAppid = "72c2436d4fd6c0d2f1ed9d8b9709dfc0";
const citySearchAppiKey = 'SWId5xLFeYYpGNUseqgRafh0dFibsyd4'
const Weather_Search_API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const City_Search_API_URL = "http://dataservice.accuweather.com/locations/v1/cities/search";

class WeatherService {
  getWeather(request) {
    return axios.get(
      Weather_Search_API_URL + `${request.city}&appid=${weatherSearchAppid}&units=${request.unit}`,
      {
        headers: {},
      }
    );
  }
  getCities(request) {
    return axios.get(
      City_Search_API_URL + `?apikey=${citySearchAppiKey}&q=${request.city}`,
      {
        headers: {},
      }
    );
  }
}

export default new WeatherService();
