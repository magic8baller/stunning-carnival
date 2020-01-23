import API from '../../services/API'
import {linkConstants} from '../constants'
const {FETCH_LINKS, LINKS_LOADING, ADD_LINK, DELETE_LINK, EDIT_LINK, SET_CURRENT_LINK, CLEAR_CURRENT_LINK, LINK_ERROR} = linkConstants
export const fetchLinks = () => async dispatch => {
	dispatch({type: LINKS_LOADING})

	try {
		const fetchAllResponse = await API.get('/api/links')
		dispatch({type: FETCH_LINKS, payload: fetchAllResponse.data})
		console.table(fetchAllResponse.data)
	} catch (error) {
		setError(error)
	}
}

export const addLink = (newLink, callback) => async (dispatch) => {
	try {
		const createLinkResponse = await API.post('/api/links', {...newLink, text: newLink.text})
		dispatch({type: ADD_LINK, payload: createLinkResponse.data})
		callback()
	} catch (error) {
		console.error(error)
		setError(error)
	}
}

export const editLink = (id, text) => async (dispatch, getState) => {
	try {
		const selectedLink = getState().link.links.find(link => link._id === id)
		const updatedLink = {...selectedLink, text}
		const editLinkResponse = await API.put(`/api/links/${id}`, updatedLink)
		dispatch({type: EDIT_LINK, payload: editLinkResponse.data})
	} catch (error) {
		setError(error)
	}
}


export const deleteLink = id => async dispatch => {
	try {
		await API.delete(`/api/links/${id}`)
		dispatch({type: DELETE_LINK, payload: id})
	} catch (error) {
		setError(error)
	}
}
export const setCurrentLink = id => dispatch => {
	dispatch({type: SET_CURRENT_LINK, payload: id})
}

export const setError = error => dispatch => {
	dispatch({type: LINK_ERROR, payload: error.message})
}
export const clearCurrentLink = () => dispatch => {
	dispatch({type: CLEAR_CURRENT_LINK})
}