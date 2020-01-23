import {linkConstants} from '../constants'
const {FETCH_LINKS, LINKS_LOADING, ADD_LINK, DELETE_LINK, EDIT_LINK,
LINK_ERROR} = linkConstants

const initialState = {
	isLoading: false,
	links: [],
	currentLink: null,
	clickedLink: null,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LINKS:
			return {
				...state,
				links: [...action.payload],
				isLoading: false
			}
		case LINKS_LOADING:
			return {
				...state,
				isLoading: true
			}
		case ADD_LINK:
			return {
				...state,
				links: [...state.links, action.payload],
				isLoading: false
			}
		case DELETE_LINK:
			return {
				...state,
				links: state.links.filter(link => link._id !== action.payload),
				isLoading: false
			}


		case EDIT_LINK:
			const editedLinks = state.links.map(link => link._id === action.payload._id ? {...link, ...action.payload} : link)
			return {
				...state,
				links: editedLinks,
				isLoading: false
			}

		case LINK_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}
		default:
			return state
	}
}