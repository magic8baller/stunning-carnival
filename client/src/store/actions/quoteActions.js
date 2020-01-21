import API, {quoteAPI} from '../../services/API'
import {quoteConstants} from '../constants'
const {FETCH_QUOTES, FETCH_SINGLE_QUOTE, FAVORITE_QUOTE, ADD_QUOTE, REMOVE_FAVORITED_QUOTE, QUOTE_ERROR} = quoteConstants

export const fetchUserQuotes = () => async (dispatch) => {
	try {
		const fetchUserQuotesResponse = await API.get('/api/quotes')
		dispatch({type: FETCH_QUOTES, payload: fetchUserQuotesResponse.data})
	} catch (error) {
		setQuoteError(error)
	}
}
export const fetchSingleQuote = () => async dispatch => {

	try {
		let getQuotesResponse = await quoteAPI.get('/')
		console.log('quoteRes:', getQuotesResponse.data)
		dispatch({type: FETCH_SINGLE_QUOTE, payload: getQuotesResponse.data})

	} catch (e) {
		setQuoteError(e)
	}
}

export const addQuote = (quote) => async dispatch => {
	try {
		const addQuoteResponse = await API.post('/api/quotes', quote)
		dispatch({type: ADD_QUOTE, payload: addQuoteResponse.data})
	} catch (error) {
		setQuoteError(error)
	}
}

export const setFavoriteQuote = (quoteId) => async dispatch => {
	try {
		const quoteResponse = await API.put(`/api/${quoteId}`)
		dispatch({type: FAVORITE_QUOTE, payload: quoteResponse.data._id})
	} catch (error) {
		setQuoteError(error)
	}
}

export const setQuoteError = (error) => dispatch => {
	return dispatch({type: QUOTE_ERROR, payload: error.message})
}