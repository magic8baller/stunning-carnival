import API from '../../API'
import {unsplashImages, getRandomImage} from '../../API/backgroundData'
import {backgroundConstants} from '../constants'
const {FETCH_ALL_BACKGROUNDS, FETCH_BACKGROUND,
	ADD_BACKGROUND,
	UPDATE_BACKGROUND,
	BACKGROUND_ERROR, SET_BACKGROUND} = backgroundConstants

export const getBackgroundHistory = () => dispatch => {
	try {

		dispatch({type: FETCH_ALL_BACKGROUNDS, payload: unsplashImages})
	} catch (error) {
		setError(error)
	}
}

export const setBackground = (payload) => dispatch => {
dispatch({type: SET_BACKGROUND, payload: payload})
}
export const getBackground = () => dispatch => {
	try {
		
		dispatch({type: FETCH_BACKGROUND, payload: getRandomImage()})
	} catch (error) {
		setError(error)
	}
}
export const setError = (error) => dispatch => {
	dispatch({type: BACKGROUND_ERROR, payload: error})
}