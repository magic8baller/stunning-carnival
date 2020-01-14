import React from 'react'

const Forecast = ({day}) => {
	let formatDay = string => {
		let dateString = new Date(string * 1000).toString();
		return dateString.slice(0, 3);
	};

	return (
		<>
			<div className="weather-forecast-item weather-forecast-day">
				<div className="weather-forecast-label" data-test="forecast-day-label">{formatDay(day.dt)}</div>
				<span><icon className={`icon icon-weather weather-forecast-icon wi wi-owm-${day.weather.id}`}/></span>
				<span className="weather-forecast-high" data-test="forecast-high">{day.main.temp_max}&deg;</span><span className="weather-forecast-low">{day.main.temp_min}&deg;</span>
			</div>

		</>
	)
}
export default Forecast