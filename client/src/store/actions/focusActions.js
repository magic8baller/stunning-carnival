import {focusConstants} from '../constants'
import API from '../../API'
const {FETCH_FOCUS, ADD_FOCUS, REMOVE_FOCUS, UPDATE_FOCUS, FOCUS_ERROR} = focusConstants

export const fetchFocus = () => async dispatch => {
	try {
		const fetchFocusResponse = await API.get('/api/focus')
		dispatch({type:FETCH_FOCUS, payload: fetchFocusResponse.data[0]})
	} catch (error) {
		console.error(error)
		setError(error)
	}
}
export const addFocus = (newFocus, callback) => async (dispatch) => {
	try {
		const createFocusResponse = await API.post('/api/focus', newFocus)
		dispatch({type: ADD_FOCUS, payload: createFocusResponse.data})
		callback()
	} catch (error) {
		console.error(error)
		setError(error)
	}
}

export const setFocusStatus = id => async (dispatch, getState) => {
	try {
		const currentSelectedFocus = getState().focus.focus
		const updatedFocus = {...currentSelectedFocus, completed: !currentSelectedFocus.completed}
		await API.put(`/api/focus/${id}`, updatedFocus)
		dispatch({type: UPDATE_FOCUS, payload: updatedFocus})
	} catch (error) {
		setError(error)
	}
}

export const deleteFocus = id => async dispatch => {
	try {
		await API.delete(`/api/focus/${id}`)
		dispatch({type: REMOVE_FOCUS, payload: id})
	} catch (error) {
		setError(error)
	}
}

export const setError = error => dispatch => {
	dispatch({type: FOCUS_ERROR, payload: error.message})
}
