import React from 'react'
import './Forecast.css'
import {convertUnix} from '../../utils/formatTime'
const Details = ({currentWeather}) => {



	return (
		<>
			<div className='weather-current-header'>
				<div className="weather-current-location">
					<div className="weather-location">
						<span className="weather-location-name">
							{currentWeather.name}
						</span>
					</div>
					<span className="weather-current-conditions">{currentWeather.weather[0].description}</span>
				</div>

			</div>
			<div className="weather-current-temp-row">
				<div className="weather-current-temp-wrapper">

					<span className="icon icon-weather weather-current-icon"><i className={`styledWeatherIcon wi wi-owm-${currentWeather.weather[0].id}`} /></span><span className="weather-current-temp">{currentWeather.main.temp.toFixed(0)}&deg;</span>
				</div>
				<div className="weather-current-details toggle-details on active">

					<div title="2 hours of sun">
						<span className="weather-current-details-title">Feels like</span>
						<span className="weather-current-details-value">
							{currentWeather.main.feels_like.toFixed(0)}&deg;
						</span>
					</div>

					<div>
						<span className="weather-current-details-title">Wind</span>
						<span className="weather-current-details-value">{currentWeather.wind.speed.toFixed(0)} mph <i className={`wi wi-wind towards-${currentWeather.wind.deg}-deg`} /></span>
					</div>
				</div>
			</div>
			<div className="weather-row weather-optional weather-detail active" data-test="weather-details">
				<div className="weather-extra">
					<div className="weather-extra-col">
						<div className="weather-extra-cell" title="Moon Waning Gibbous">
							<div>
								<span className="weather-current-details-title">Sunrise</span> <span className="weather-current-details-value">{convertUnix(currentWeather.sys.sunrise)}</span>
							</div>
							<div>
								<span className="weather-current-details-title">Sunset</span> <span className="weather-current-details-value">{convertUnix(currentWeather.sys.sunset)}</span>
							</div>
						</div>

						<div className="weather-extra-cell">

							<div className="pressure-text">
								<span className="weather-current-details-title">Pressure</span> <span className="weather-current-details-value" title="Steady">{currentWeather.main.pressure} inHg</span>
							</div>
						</div>
					</div>

					<div className="weather-extra-col">
						<div className="weather-extra-cell">
							<div>
								<span className="weather-current-details-title">Humidity</span> <span className="weather-current-details-value">{currentWeather.main.humidity}%</span>
							</div>
							<div title="In the past 24 hours">

							</div>
						</div>

						<div className="weather-extra-cell">

							<div title="">
								<span className="weather-current-details-title">Visibility</span> <span className="weather-current-details-value">{currentWeather.visibility}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
export default Details