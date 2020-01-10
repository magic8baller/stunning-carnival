import React from 'react'

const CurrentWeather = ({currentWeather}) => {

	if (currentWeather) {
		const {main: {temp, temp_min, temp_max, pressure, humidity}, clouds, wind, weather, name} = currentWeather

		const renderWeather = () => (


			<div className='weather-container'>
			<div className='weather-temp'>

						<img
							src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
							alt='weather icon'
						/>
					{temp.toFixed(0)}&deg;
					</div>
				<p className="user-city">{name}</p>
</div>

		

		)

		return (
			<div>

				{renderWeather()}
			</div>
		)
	}
}


export default CurrentWeather