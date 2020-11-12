import React, { useState, useEffect } from "react";
import ErrorComponent from "../error/error-component";
import LoadingComponent from "../loading/loading-component";
import "./weather-component.styles.css";
import api, { setUrl, getUrl } from "../../services/api";

const WeatherComponent = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [data, setData] = useState({ loading: true });

  useEffect(() => {
    async function updatePosition(geoPosition) {
      setPosition({
        latitude: geoPosition.coords.latitude,
        longitude: geoPosition.coords.longitude,
      });
    }

    async function getWeatherData() {
      if (position.latitude && position.longitude) {
        setUrl(position.latitude, position.longitude);
        api
          .get(getUrl())
          .then((response) => {
            setData({
              address: `${response.data.name}, ${response.data.sys.country}`,
              country: response.data.sys.country,
              icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
              description: response.data.weather[0].description,
              windspeed: mpsTokmh(response.data.wind.speed),
              temperature: kelvinToCelsius(response.data.main.temp),
              humidity: response.data.main.humidity,
              pressure: response.data.main.pressure,
              lastUpdate: getDateNow(),
              isconnected: true,
              loading: false,
            });
          })
          .catch((e) => {
            setData({
              lastUpdate: getDateNow(),
              isconnected: false,
              error: e.message,
              loading: false,
            });
          });
      }
    }

    async function getGeoLocation() {
      try {
        await navigator.geolocation.getCurrentPosition(updatePosition);
        await getWeatherData();
      } catch (e) {
        setData({
          isconnected: false,
          error: e.message,
          loading: false,
        });
      }
    }

    getGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position.latitude]);

  function UpdateData() {
    setPosition({ latitude: 0, longitude: 0 });
    setData({ loading: true });
  }

  const mpsTokmh = (speed) => {
    const speedInKm = speed * 3.72;
    return speedInKm.toFixed(2);
  };

  const kelvinToCelsius = (temp) => {
    const tempInCelsius = temp - 273.15;
    return tempInCelsius.toFixed(2);
  };

  const getDateNow = () => {
    let dateNow = new Date();
    let localdate =
      dateNow.getDate() +
      "/" +
      (dateNow.getMonth() + 1) +
      "/" +
      dateNow.getFullYear() +
      " " +
      dateNow.getHours().toString().padStart(2, "0") +
      ":" +
      dateNow.getMinutes().toString().padStart(2, "0");
    return localdate;
  };

  return (
    <div className="weather-container">
      {data.loading ? (
        <LoadingComponent />
      ) : data.isconnected ? (
        <div>
          <div className="location">
            <h2>{data.address}</h2>
          </div>

          <div>
            <img
              src={data.icon}
              alt="Imagem do Tempo"
              width={150}
              height={150}
            />
          </div>
          <div className="weather-data">
            <div>
              <span>Temperature: </span>
              {data.temperature} <sup>o</sup>C
            </div>
            <div>
              <span>Description: </span>
              {data.description}
            </div>
            <div>
              <span>Wind Speed: </span>
              {data.windspeed} Km/h
            </div>
            <div>
              <span>Humidity: </span>
              {data.humidity}%
            </div>
            <div>
              <span>Pressure: </span>
              {data.pressure} hPa
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ErrorComponent error={data.error} />
        </div>
      )}

      <div className="button">
        <button onClick={UpdateData}>Update</button>
      </div>
      <div>
        <span>Last Updated: </span>
        {data.lastUpdate}
      </div>
    </div>
  );
};

export default WeatherComponent;
