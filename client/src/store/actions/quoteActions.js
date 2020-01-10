import API from '../../API'
import {quoteConstants} from '../constants'
const {FETCH_QUOTES, FETCH_SINGLE_QUOTE, FAVORITE_QUOTE, ADD_QUOTE, REMOVE_FAVORITED_QUOTE, QUOTE_ERROR} = quoteConstants

export const fetchQuotes = () = async dispatch => {
let getQuotesResponse = await API.get('/api/quotes')

dispatch({type:FETCH_QUOTES, payload: getQuotesResponse.data})
}

export const setFavoriteQuote = (quoteId) => async dispatch => {
	try {
		const quoteResponse = await API.put(`/api/${quoteId}`)
		dispatch({type: FAVORITE_QUOTE, payload: quoteResponse.data._id})
	} catch (error) {
		setQuoteError(error)
	}
}

export const setError = (error) => dispatch => {
	return dispatch({type: QUOTE_ERROR, payload: error.message})
}