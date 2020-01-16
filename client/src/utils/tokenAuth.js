import axios from 'axios'
export const setAuthToken = token => {
	if (token) {
		localStorage.token = token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete localStorage.token
	
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