import API from '../../API'
import {noteConstants} from '../constants'

const {FETCH_NOTES, LOADING_NOTES, ADD_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE, REMOVED_NOTE, NOTE_ERROR} = noteConstants


export const fetchNotes = () => async dispatch => {
	dispatch({type: LOADING_NOTES})

	try {
		const fetchAllResponse = await API.get('/api/notes')
		dispatch({type: FETCH_NOTES, payload: fetchAllResponse.data})
		console.table(fetchAllResponse.data)
	} catch (error) {
		setError(error)
	}
}

export const addNote = (newNote, callback) => async (dispatch) => {

	try {
		console.log(newNote)

		const createNoteResponse = await API.post('/api/notes', {...newNote, title: newNote.title, body: newNote.body})
		dispatch({type: ADD_NOTE, payload: createNoteResponse.data})
		callback()
	} catch (error) {
		console.error(error)
		setError(error)
	}
}

export const updateNote = (id, updatedNote, callback) => async (dispatch) => {
	try {
		const updateNoteResponse = await API.put(`/api/notes/${id}`, {...updatedNote, title: updatedNote.title, body: updatedNote.body, updatedAt: new Date()})
		dispatch({type: UPDATE_NOTE, payload: updateNoteResponse.data})
		callback()
	} catch (error) {
		setError(error)
	}
}



export const deleteNote = id => async dispatch => {
	try {
		await API.delete(`/api/notes/${id}`)
		dispatch({type: REMOVED_NOTE, payload: id})
	} catch (error) {
		setError(error)
	}
}
export const setCurrentNote = id => dispatch => {
	dispatch({type: SET_CURRENT_NOTE, payload: id})
}

export const setError = error => dispatch => {
	dispatch({type: NOTE_ERROR, payload: error.message})
}
export const clearCurrentNote = () => dispatch => {
	dispatch({type: 'CLEAR_CURRENT_NOTE'})
}