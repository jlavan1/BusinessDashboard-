import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import "./main/main.css";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });

  const getWeather = async q => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&APPID=b4cb723ab7cafbf6eb1e91467d81b329`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.country
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <br />
          <MDBCol md="12">
            <MDBFormInline className="md-form mr-auto">
              <input
                className="form-control mr-sm-2 white-text"
                type="text"
                placeholder="Enter City"
                aria-label="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <MDBBtn
                gradient="aqua"
                rounded
                size="sm"
                type="submit"
                className="mr-auto white-text"
                onClick={e => handleSearch(e)}
              >
                Get Weather
              </MDBBtn>
            </MDBFormInline>
          </MDBCol>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!
          <br />
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
