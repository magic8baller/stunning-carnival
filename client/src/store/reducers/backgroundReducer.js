import {backgroundConstants} from '../constants'
const {FETCH_BACKGROUND, FETCH_ALL_BACKGROUNDS, BACKGROUND_ERROR, ADD_BACKGROUND, SET_BACKGROUND} = backgroundConstants

const initialState = {
	backgrounds: [],
	currentBackground: null,
	isLoading: false,
	bgStyle: null
}
export default function (state = initialState, action) {
	switch (action.type) {
		case SET_BACKGROUND:
		return {...state, bgStyle: action.payload}
		case FETCH_ALL_BACKGROUNDS:
			return {...state, backgrounds: action.payload.images, currentBackground: action.payload.random}
		case FETCH_BACKGROUND:
			return {...state, currentBackground: action.payload,backgrounds: [...state.backgrounds, ...action.payload]}
		case ADD_BACKGROUND:
			return {}
		case BACKGROUND_ERROR:
			return {...state, isLoading: false, error: action.payload}

		default:
			return state;
	}
}