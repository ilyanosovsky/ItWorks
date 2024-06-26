import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import FiveDaysForecast from "./components/FiveDaysForecast";
import CurrentWeather from "./components/CurrentWeather";
import Favorites from "./components/Favorites";
import AutoCompleteText from "./components/AutoCompleteText";

export const AppContext = createContext(null);

function App() {
  const [city, setCity] = useState("Tel Aviv");
  const [country, setCountry] = useState("Israel");
  const [cityKey, setCityKey] = useState(215854);
  const [metric, setMetric] = useState(true);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <AppContext.Provider
              value={{
                city,
                setCity,
                cityKey,
                setCityKey,
                metric,
                setMetric,
                country,
                setCountry,
              }}
            >
              <div className="App">
              <AutoCompleteText />
                <CurrentWeather />
                <FiveDaysForecast />
              </div>
            </AppContext.Provider>
          }
        />
        <Route
          path="/favorites"
          element={
            <AppContext.Provider
              value={{
                city,
                setCity,
                cityKey,
                setCityKey,
                metric,
                setMetric,
                country,
                setCountry,
              }}
            >
              <Favorites />
            </AppContext.Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
