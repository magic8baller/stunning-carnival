import {isEmpty} from '../../validation/is-empty.js'


const initialState = {
	isLoading: false,
	isAuthenticated: false,
	errorMessage: '',
	user: {},
	token: null
}
export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_USER':
			return {...state, isLoading: true}
		case 'SET_CURRENT_USER':
			return {...state, isLoading: false, isAuthenticated: !isEmpty(action.payload), user: action.payload.user, token: action.payload.token}

		case 'AUTHENTICATE_ERROR':
			return {...state, isLoading: false, isAuthenticated: false, errorMessage: action.payload}
			case 'CLEAR_ERROR':
				return {...state, errorMessage: null}
		case 'LOGOUT_USER':
			return {
				...state, isAuthenticated: false,
				user: null,
				token: action.payload
			}
		default:
			return state
	}
}