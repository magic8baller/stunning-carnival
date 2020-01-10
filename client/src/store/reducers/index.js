import {combineReducers} from 'redux'
// import {reducer as formReducer} from 'redux-form'
// import authReducer from './authReducer'
// import todoReducer from './todoReducer'
import geolocationReducer from './geolocationReducer'
import weatherReducer from './weatherReducer'
// import noteReducer from './noteReducer'
// import quoteReducer from './quoteReducer'
// import focusReducer from './focusReducer'


export default combineReducers({
	test: () => 123,

	position: geolocationReducer,
	weather: weatherReducer

})