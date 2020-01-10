import {focusConstants} from '../constants'

const {ADD_FOCUS, REMOVE_FOCUS, UPDATE_FOCUS, FOCUS_ERROR} = focusConstants

const initialState = {
	focus: null,
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {

		case ADD_FOCUS:
			return {...state, focus: action.payload}
		case UPDATE_FOCUS:
			return {...state, focus: action.payload}
			case REMOVE_FOCUS:
			return {...state, focus: action.payload}
			case FOCUS_ERROR:
				return {...state, errorMessage: action.payload}
		default:
			return state
	}
}