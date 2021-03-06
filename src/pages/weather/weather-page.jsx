import WeatherComponent from "../../components/weather/weather-component";
import "./weather-page.styles.css";

const WeatherPage = ({ title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <WeatherComponent />
    </div>
  );
};

export default WeatherPage;
