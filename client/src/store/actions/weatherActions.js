import {weatherAPI} from '../../API'
import {weatherConstants} from '../constants'
const {GEOLOCATION_DENIED, GET_CURRENT_WEATHER, GET_WEATHER_FORECAST, GET_GEOLOCATION, SET_COORDS,WEATHER_ERROR} = weatherConstants
const REACT_APP_OPEN_WEATHER_KEY = '2d61e029b2ceb5e6ee95965c1c1d3bd2'

export const getGeolocation = () => async dispatch => {
	navigator.geolocation.getCurrentPosition(position => {
		// localStorage.setItem('coords', JSON.stringify(position.coords))
		dispatch({type: GET_GEOLOCATION, payload: position.coords})

	},
		error => {
			if (error.code === 1) {
				dispatch({type: GEOLOCATION_DENIED, payload: false})
			}
		})
}



export const fetchCurrentWeather = ({latitude, longitude}) => async (dispatch) => {
	try {
		let weatherResponse = await weatherAPI.get(`/weather/?lat=${latitude}&lon=${longitude}&cnt=10&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=imperial`)

		dispatch({type: GET_CURRENT_WEATHER, payload: weatherResponse.data})

		dispatch({type: SET_COORDS, payload: weatherResponse.data.coord})
	} catch (err) {
		dispatch({type: WEATHER_ERROR, payload: err.message})
		console.error(err)
	}
}
export const fetchForecast = ({latitude, longitude}) => async (dispatch) => {
	try {
		let forecastResponse = await weatherAPI.get(`/forecast/?lat=${latitude}&lon=${longitude}&cnt=10&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=imperial`)

		dispatch({
			type: GET_WEATHER_FORECAST, payload: forecastResponse.data})


	} catch (err) {
		dispatch({type: WEATHER_ERROR, payload: err.message})
		console.error(err)
	}
}