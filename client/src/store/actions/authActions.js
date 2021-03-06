import API from '../../services/API'
import history from '../../history'
import {parseJwt, setAuthToken} from '../../utils/tokenAuth'

export const registerUser = (formProps, callback) => async dispatch => {
	try {
		const registerResponse = await API.post('/register', formProps)
		const {token} = registerResponse.data
		localStorage.setItem('token', token)
		setAuthToken(token)
		const decodedToken = parseJwt(token)
		dispatch(setCurrentUser(decodedToken))
		history.push('/')
	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: 'Email is already registered'})
	}
}


export const loginUser = (formProps, callback) => async dispatch => {

	try {
		const loginResponse = await API.post('/login', formProps)
		const {token} = loginResponse.data
		localStorage.setItem('token', token)
		setAuthToken(token)
		const decoded = parseJwt(token)
		dispatch(setCurrentUser(decoded))
history.push('/')
	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: 'Invalid login credentials'})
	}
}

export const loginWithToken = token => async dispatch => {
	setAuthToken(token)
	try {
		let userResponse = await API.get('/me')
		dispatch({type: 'SET_CURRENT_USER', payload: {token, user: userResponse.data}})

	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: e.message})

	}
}
export const loadUser = () => async dispatch => {
	dispatch({type: 'LOADING_USER'})
	setAuthToken(localStorage.token)
	try {
		let userResponse = await API.get('/me')
		dispatch({type: 'SET_CURRENT_USER', payload: {user: userResponse.data}})

	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: e.message})

	}
}
export const logoutUser = () => dispatch => {
	try {
		localStorage.removeItem('token')
		localStorage.removeItem('coords')
		dispatch({type: 'LOGOUT_USER', payload: ''})
		history.push('/login')
	} catch (error) {
		console.error(error.message)
	}
}
export const setCurrentUser = decoded => {
	return {type: 'SET_CURRENT_USER', payload: decoded}
}

export const clearError = () => dispatch => dispatch({type: 'CLEAR_ERROR'})