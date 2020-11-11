import React, { Component } from "react";
import "./weather-component.styles.css";

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "",
      weatherData: "",
    };
  }
  render() {
    const { address, weatherData } = this.state;
    return (
      <div class="weather-container">
        <div>Endereço atual: {address}</div>
        <div>Dados Climáticos da Região: {weatherData}</div>
        <button>Atualizar</button>
      </div>
    );
  }
}

export default WeatherComponent;
