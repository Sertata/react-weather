import React, { memo } from 'react';

const DetailWeather = ({ res }) => {
  return res.map((e) => {
    const tempOptions = String.fromCharCode(8451);
    const description = e.weather.map((e) => e.description);
    const icon = e.weather.map(
      (e) => `http://openweathermap.org/img/wn/${e.icon}@2x.png`
    );
    return (
      <>
        <p>{e.dt_txt}</p>
        <p>
          {(e.main.temp - 273.15).toFixed(2)}
          {tempOptions}
        </p>
        <p>{description}</p>
        <img src={icon} alt={description}></img>
      </>
    );
  });
};

export default memo(DetailWeather);
