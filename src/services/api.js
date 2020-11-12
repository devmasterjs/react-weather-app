import axios from "axios";

let url = "";

export const setUrl = (latitude, longitude) => {
  url = `http://api1.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}
  `;
};

export const getUrl = () => {
  return url;
};

const api = axios.create();

export default api;
