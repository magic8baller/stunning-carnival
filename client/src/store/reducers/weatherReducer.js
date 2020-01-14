import {weatherConstants} from '../constants'
const {WEATHER_ERROR, GET_CURRENT_WEATHER, GET_WEATHER_FORECAST, GET_GEOLOCATION} = weatherConstants



const initialState = {
	currentWeather: null,
	loading: false,
	error: null,
	forecast: null

}

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENT_WEATHER:
			return {
				...state,
				currentWeather: {...state.currentWeather, ...action.payload}
			}
			case GET_WEATHER_FORECAST:
				return {
					...state,
					forecast: action.payload
				}
			case WEATHER_ERROR:
				return {
					...state,
					error: action.payload
				}
		default:
			return state
	}
}

export default weatherReducer