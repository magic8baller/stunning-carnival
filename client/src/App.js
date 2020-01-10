import React from 'react'
// import Greeting from './components/Greeting'
import Router from './Router'
import {Provider} from 'react-redux'
import store from './store'
import {loginWithToken} from './store/actions/authActions'


localStorage.getItem('token') && store.dispatch(loginWithToken(localStorage.getItem('token')))
const App = () => {
	return (
	<Provider store={store}>
	<Router/>
		</Provider>
	)
}

export default App;