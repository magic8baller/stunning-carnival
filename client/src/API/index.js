import axios from 'axios'

export default axios.create({
	baseURL: 'https://damp-sea-47360.herokuapp.com',
	headers: {
		common: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.token}`
		}
	}
})

export const weatherAPI = axios.create({
	baseURL: 'http://api.openweathermap.org/data/2.5'
	
})
export const quoteAPI = axios.create({
	baseURL: "https://freequote.herokuapp.com/"
})

export const unsplashAPI = axios.create({
	baseURL: "https://api.unsplash.com/photos/random?collections=1097296",
	headers: {
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
	}
})