/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import DetailWeather from '../detailWeather'
import './wether.css'

const Wearherlist = ({ result }) => {
  const [detailWeatherDay, setDetailWeatherDay] = useState(null);
  

  return result.map((item) => {
    const tempOptions = String.fromCharCode(8451);
    const description = item.weather.map((e) => e.description);
    const icon = item.weather.map(
      (e) => `http://openweathermap.org/img/wn/${e.icon}@2x.png`
    );
   
   
    if (item.dt_txt.slice(-8) === '12:00:00') {
      const dateNow = item.dt_txt.slice(0,11)
      const res=result.filter(elem=>elem.dt_txt.slice(0,11)===dateNow)
      
      return (
        <div className="weather" key={item.dt}>
          <div>
            <img src={icon}></img>
            <p>{item.dt_txt}</p>
            <p>
              {(item.main.temp - 273.15).toFixed(2)}
              {tempOptions}
            </p>
            <p>{description}</p>
            <button id={item.dt} onClick={() => setDetailWeatherDay(dateNow)}>
              Details
            </button>
          </div>
          <div>
            {dateNow === detailWeatherDay && <DetailWeather res={res} />}
          </div>
        </div>
      );
    }
  });
};

export default Wearherlist;

