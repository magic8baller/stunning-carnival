import API from '../../services/API'
import {unsplashImages} from '../../services/API/backgroundData'
import {backgroundConstants} from '../constants'
const {FETCH_ALL_BACKGROUNDS, FETCH_BACKGROUND,
	ADD_BACKGROUND,
	UPDATE_BACKGROUND,
	BACKGROUND_ERROR, SET_BACKGROUND} = backgroundConstants

export const getBackgroundHistory = () => dispatch => {
	try {

		dispatch({type: FETCH_ALL_BACKGROUNDS, payload: {images: unsplashImages, random: unsplashImages[Math.floor(Math.random() * unsplashImages.length)]}})
	} catch (error) {
		setError(error)
	}
}

export const setBackground = (payload) => dispatch => {
dispatch({type: SET_BACKGROUND, payload: payload})
}
export const getBackground = (payload) => (dispatch, getState) => {
	try {

		dispatch({type: FETCH_BACKGROUND, payload})
	} catch (error) {
		setError(error)
	}
}
export const setError = (error) => dispatch => {
	dispatch({type: BACKGROUND_ERROR, payload: error})
}