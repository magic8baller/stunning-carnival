import {focusConstants} from '../constants'
const {FETCH_FOCUS, ADD_FOCUS, REMOVE_FOCUS, UPDATE_FOCUS, FOCUS_ERROR} = focusConstants

const initialState = {
	focus: null,
	errorMessage: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FOCUS:
			return {
				...state,
			focus: action.payload
			}
		case ADD_FOCUS:
			return {...state, focus: action.payload}
		case UPDATE_FOCUS:
			return {...state, focus: state.focus._id === action.payload._id ? {...state.focus, completed: !state.focus.completed} : state.focus}
			case REMOVE_FOCUS:
			return {...state, focus: null}
			case FOCUS_ERROR:
				return {...state, errorMessage: action.payload}
		default:
			return state
	}
}