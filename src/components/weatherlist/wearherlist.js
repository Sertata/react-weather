/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import DetailWeather from '../detailWeather'
import './wether.css'

const Wearherlist = ({ result }) => {
  const [detailWeatherDay, setDetailWeatherDay] = useState(null);
  //const [keyItem,setKeyItem] = useState('')

  return result.map((item) => {
    const tempOptions = String.fromCharCode(8451);
    const description = item.weather.map((e) => e.description);
    const icon = item.weather.map(
      (e) => `http://openweathermap.org/img/wn/${e.icon}@2x.png`
    );
   
    if (item.dt_txt.slice(-8) === '12:00:00') {
      return (
        <div className="weather" key={item.dt}>
          <img src={icon}></img>
          <p>{item.dt_txt}</p>
          <p>
            {(item.main.temp - 273.15).toFixed(2)}
            {tempOptions}
          </p>
          <p>{description}</p>
          <button
            id={item.dt}
            onClick={({ target }) => setDetailWeatherDay(target.id)}>
            Details
            </button>
          {detailWeatherDay && <DetailWeather res={detailWeatherDay}  />}
        </div>
      );
    }
  });
};

export default Wearherlist;

