import { useContext, useEffect, useState } from "react";
import { getDayOfTheWeek, getShortDate } from "../helpers/dates";
import { AppContext } from "../App";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const FiveDaysForecast = (props) => {
  const [forecastWeather, setForecastWeather] = useState({});
  const { city, cityKey, metric } = useContext(AppContext);

  useEffect(() => {
    getForecastWeather(cityKey);
  }, [cityKey]);

  const getForecastWeather = (cityKey) => {
    fetch(
      `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${metric}`
    )
      .then((res) => res.json())
      .then((data) => {
        setForecastWeather(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2>Five Days Forecast</h2>
      {forecastWeather.DailyForecasts
        ? forecastWeather.DailyForecasts.map((day, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "inline-block",
                  border: "1px solid #ccc",
                  margin: "10px",
                }}
              >
                <p>
                  {getDayOfTheWeek(day.Date)}
                  <br />
                  {getShortDate(day.Date)}
                </p>
                <p>
                  {
                    <img
                      src={`https://developer.accuweather.com/sites/default/files/${
                        day.Day.Icon < 10 ? "0" + day.Day.Icon : day.Day.Icon
                      }-s.png`}
                    />
                  }
                  <br />
                  {day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}
                </p>
                <p>
                  {
                    <img
                      src={`https://developer.accuweather.com/sites/default/files/${
                        day.Night.Icon < 10
                          ? "0" + day.Night.Icon
                          : day.Night.Icon
                      }-s.png`}
                    />
                  }
                  <br />
                  {day.Temperature.Minimum.Value} {day.Temperature.Minimum.Unit}
                </p>
              </div>
            );
          })
        : null}
    </>
  );
};

export default FiveDaysForecast;
