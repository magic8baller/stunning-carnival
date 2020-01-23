import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import focusReducer from './focusReducer'
import geolocationReducer from './geolocationReducer'
import linkReducer from './linkReducer'
import quoteReducer from './quoteReducer'
import themeReducer from './themeReducer'
import todoReducer from './todoReducer'
import weatherReducer from './weatherReducer'
import backgroundReducer from './backgroundReducer'

export default combineReducers({
	test: () => 123,
	auth: authReducer,
	todo: todoReducer,
	quote: quoteReducer,
	focus: focusReducer,
	link: linkReducer,
	form: formReducer,
	position: geolocationReducer,
	weather: weatherReducer,
	theme: themeReducer,
	background: backgroundReducer,
})