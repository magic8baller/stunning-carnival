
import axios from 'axios'

export const setUpperCaseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

export const setAuthToken = token => {
	if (token) {
		localStorage.token = token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete localStorage.token
		// Delete auth header
		delete axios.defaults.headers.common['Authorization']
	}
}

export const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split('.')[1]))
	} catch (e) {
		return null
	}
}