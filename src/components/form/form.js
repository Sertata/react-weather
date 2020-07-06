import React, { useState } from 'react';
import WeatherList from '../weatherlist';

const Form = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const _apiKey = 'd10a887e6cd2a7f7648da7617027af24';

  const fetchData = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${_apiKey}`
    );
    const {list} = await res.json();
    setWeather(list);
  };
  return (
    <>
      <input onChange={({ target }) => setCity(target.value)} />
      <button onClick={() => fetchData(city)}>Search weather</button>
      {weather && <WeatherList result={weather} />}
    </>
  );
};

export default Form;
