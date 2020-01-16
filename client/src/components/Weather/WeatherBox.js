import React from 'react'
import './Forecast.css'

import WeatherDetails from './WeatherDetails'
const WeatherBox = props => {
  return <section>
      <WeatherDetails currentWeather={props.currentWeather} />

		</section>;
};



export default WeatherBox
