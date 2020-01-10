import {noteConstants} from '../constants'

const {FETCH_NOTES, ADD_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE, LOADING_NOTES,REMOVED_NOTE, NOTE_ERROR} = noteConstants

const initialState = {
	notes: [],
	currentNote: null,
	updatedTime: null,
	errorMessage: '',
	isLoading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case LOADING_NOTES:
			return {
				...state,
				isLoading: true
			}
		case FETCH_NOTES:
			return {...state, notes: action.payload, isLoading: false}
		case ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, action.payload], isLoading:false
			}
			case REMOVED_NOTE:
				return {
					...state,
					notes: state.notees.filter(note => note._id !== action.payload)
				}
			case NOTE_ERROR:
				return {
					...state,
					errorMessage: action.payload, isLoading: false
				}
		default:
			return state
	}
}