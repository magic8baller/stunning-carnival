import API from '../../API'
import {backgroundConstants} from '../constants'
const {FETCH_ALL_BACKGROUNDS, FETCH_BACKGROUND,
	ADD_BACKGROUND,
	UPDATE_BACKGROUND,
	BACKGROUND_ERROR, SET_BACKGROUND} = backgroundConstants

export const getBackgroundHistory = () => async dispatch => {
	try {
		const fetchAllBackgroundsResponse = await API.get('/api/photos')
		dispatch({type: FETCH_ALL_BACKGROUNDS, payload: fetchAllBackgroundsResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const setBackground = (payload) => dispatch => {
dispatch({type: SET_BACKGROUND, payload: payload})
}
export const getBackground = () => async dispatch => {
	try {
		const fetchBackgroundResponse = await API.post('/api/photos/daily')
		dispatch({type: FETCH_BACKGROUND, payload: fetchBackgroundResponse.data})
	} catch (error) {
		setError(error)
	}
}
export const setError = (error) => dispatch => {
	dispatch({type: BACKGROUND_ERROR, payload: error})
}