import WeatherComponent from "../../components/weather/weather-component";
import "./weather-page.styles.css";

const WeatherPage = () => {
  return (
    <div className="container">
      <h1>Weather Page</h1>
      <WeatherComponent />
    </div>
  );
};

export default WeatherPage;
