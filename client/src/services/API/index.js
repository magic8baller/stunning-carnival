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

