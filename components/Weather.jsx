import React, { useState } from 'react';
import '../src/Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [infoTxt, setInfoTxt] = useState('');
  const [infoTxtClass, setInfoTxtClass] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const requestApi = (city) => {
    const apiKey = 'f2fba7e681a671ef1de8f40521192d2c'; // Replace with your OpenWeatherMap API key
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchData(api);
  };

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = 'f2fba7e681a671ef1de8f40521192d2c'; // Replace with your OpenWeatherMap API key
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchData(api);
  };

  const onError = (error) => {
    console.error('Error occurred while fetching location:', error);
    setInfoTxt('Something went wrong while fetching location');
    setInfoTxtClass('error');
  };

  const fetchData = (api) => {
    setInfoTxt('Getting weather details...');
    setInfoTxtClass('pending');
    fetch(api)
      .then((res) => res.json())
      .then((result) => weatherDetails(result))
      .catch(() => {
        setInfoTxt('Something went wrong');
        setInfoTxtClass('error');
      });
  };

  const weatherDetails = (info) => {
    if (info.cod === '404') {
      setInfoTxtClass('error');
      setInfoTxt(`${city} isn't a valid city name`);
    } else {
      const city = info.name;
      const country = info.sys.country;
      const { description, id } = info.weather[0];
      const { temp, feels_like, humidity } = info.main;

      let weatherIcon;
      if (id === 800) {
        weatherIcon = 'icons/clear.svg';
      } else if (id >= 200 && id <= 232) {
        weatherIcon = 'icons/storm.svg';
      } else if (id >= 600 && id <= 622) {
        weatherIcon = 'icons/snow.svg';
      } else if (id >= 701 && id <= 781) {
        weatherIcon = 'icons/haze.svg';
      } else if (id >= 801 && id <= 804) {
        weatherIcon = 'icons/cloud.svg';
      } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        weatherIcon = 'icons/rain.svg';
      }

      setWeatherData({
        city,
        country,
        description,
        temp,
        feels_like,
        humidity,
        weatherIcon,
      });
      setInfoTxtClass('');
      setInfoTxt('');
      setCity('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    requestApi(city);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccess,
        onError
      );
    } else {
      setInfoTxt('Your browser does not support geolocation');
      setInfoTxtClass('error');
    }
  };

  const handleBackClick = () => {
    setWeatherData(null);
  };

  return (
    <div className='container'>
      <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
      <div className={`wrapper ${weatherData ? 'active' : ''}`}>
        <header>
          <i className="bx bx-left-arrow-alt" onClick={handleBackClick} />
          Weather App
        </header>
        <section className="input-part">
          <p className={`info-txt ${infoTxtClass}`}>{infoTxt}</p>
          <div className="content">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                spellCheck="false"
                placeholder="Enter city name"
                required=""
                value={city}
                onChange={handleInputChange}
              />
              <div className="separator" />
            </form>
          </div>
          <button onClick={handleLocationClick}>Get Location</button>
        </section>
        {weatherData && (
          <section className="weather-part">
            <div className="temp">
              <span className="numb">{Math.floor(weatherData.temp)}</span>
              <span className="deg">°</span>C
            </div>
            <div className="weather">{weatherData.description}</div>
            <div className="location">
              <i className="bx bx-map" />
              <span>
                {`${weatherData.city}, ${weatherData.country}`}
              </span>
            </div>
            <div className="bottom-details">
              <div className="column feels">
                <i className="bx bxs-thermometer" />
                <div className="details">
                  <div className="temp">
                    <span className="numb-2">
                      {Math.floor(weatherData.feels_like)}
                    </span>
                    <span className="deg">°</span>C
                  </div>
                  <p>Feels like</p>
                </div>
              </div>
              <div className="column humidity">
                <i className="bx bxs-droplet-half" />
                <div className="details">
                  <span>{`${weatherData.humidity}%`}</span>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Weather;
