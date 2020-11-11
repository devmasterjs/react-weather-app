import React, { Component } from "react";
import WeatherComponent from "../../components/weather/weather-component";
import "./weather-page.styles.css";

class WeatherPage extends Component {
  render() {
    return (
      <div class="container">
        <h1>Weather Page</h1>
        <WeatherComponent />
      </div>
    );
  }
}

export default WeatherPage;
