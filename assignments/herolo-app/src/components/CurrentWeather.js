import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { getFromLocalStorage, addToLocalStorage } from "../helpers/storage";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const CurrentWeather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const { city, cityKey, metric, country, setCity, setCountry } =
    useContext(AppContext);

  useEffect(() => {
    getCurrentWeather(props.cityKey || cityKey);
  }, [cityKey, props.cityKey]);

  const getCurrentWeather = (cityKey) => {
    fetch(
      `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&metric=${metric}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (currentWeather.length === 0) return null;

  return (
    <div>
      <h4>{!props.cityKey ? "Current Weather" : null}</h4>
      <p>
        {props.city || city}
        <br />
        {props.country || country}
      </p>
      <p>{currentWeather[0].Temperature.Metric.Value}</p>
      <p>{currentWeather[0].WeatherText}</p>
      <p>
        {
          <img
            src={`https://developer.accuweather.com/sites/default/files/${
              currentWeather[0].WeatherIcon < 10
                ? "0" + currentWeather[0].WeatherIcon
                : currentWeather[0].WeatherIcon
            }-s.png`}
          />
        }
      </p>
      
    </div>
  );
};

export default CurrentWeather;
