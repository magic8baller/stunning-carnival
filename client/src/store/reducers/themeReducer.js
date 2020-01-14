import {themeConstants} from '../constants'
const {UPDATE_THEME_COLOR, UPDATE_THEME_FONT}=themeConstants



const initialState = {
	themeColor: 'black',
	themeFont: 'Roboto',
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_THEME_COLOR:
			return {...state, themeColor: action.payload}
		case UPDATE_THEME_FONT:
			return {...state, themeFont: action.payload}

			case 'THEME_ERROR':
				return {...state, errorMessage: action.payload}
		default:
			return state
	}
}