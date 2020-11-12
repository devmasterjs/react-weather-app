import axios from "axios";

let url = "";

export const setUrl = (latitude, longitude) => {
  url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=18cecc3f0a9002d90c6f33d8cdf25169
  `;
};

export const getUrl = () => {
  console.log(url);
  return url;
};

const api = axios.create();

export default api;
