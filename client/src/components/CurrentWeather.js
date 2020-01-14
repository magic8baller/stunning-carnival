import React from 'react'

const CurrentWeather = ({currentWeather: {main: {temp}, weather, name}}) => (
			<div>
				<div className='weather-container'>
					<div className='weather-temp'>
						<i
							className={`wi wi-owm-${weather[0].id}`}
							alt='weather icon'
						/>
						{temp.toFixed(0)}&deg;
					</div>
					<p className="user-city">{name}</p>
				</div>
			</div>
		)




export default CurrentWeather