import {quoteConstants} from '../constants'
const {FETCH_QUOTES, FETCH_SINGLE_QUOTE, FAVORITE_QUOTE, ADD_QUOTE, REMOVE_FAVORITED_QUOTE, UPDATE_QUOTES} = quoteConstants

const initialState = {
	quotes: [],
	currentQuote: null,

}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_QUOTES:
			return {...state, quotes: action.payload}
		case FETCH_SINGLE_QUOTE:
			return {...state, currentQuote: action.payload}
		case ADD_QUOTE:
			return {...state, quotes: [...state.quotes, action.payload]}
		case UPDATE_QUOTES:
			return {...state, quotes: [...state.quotes, action.payload]}
		case FAVORITE_QUOTE:
			const updatedQuote = state.quotes.map(quote => quote._id === action.payload ? {...quote, favorite: true} : quote)
			return {...state, quotes: [...state.quotes, updatedQuote]}
		case REMOVE_FAVORITED_QUOTE:
			// return {...state, quotes: [...state.quotes, filteredQuotes]}
		default:
			return state
	}
}