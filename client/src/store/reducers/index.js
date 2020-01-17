import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import focusReducer from './focusReducer'
import geolocationReducer from './geolocationReducer'
import noteReducer from './noteReducer'
import quoteReducer from './quoteReducer'
import themeReducer from './themeReducer'
import todoReducer from './todoReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
	test: () => 123,
	auth: authReducer,
	todo: todoReducer,
	note: noteReducer,
	quote: quoteReducer,
	focus: focusReducer,
	form: formReducer,
	position: geolocationReducer,
	weather: weatherReducer,
	theme: themeReducer
})