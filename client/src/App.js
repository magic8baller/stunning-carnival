import React from 'react'
// import Greeting from './components/Greeting'
import Router from './Router'
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './store/actions/authActions'


localStorage.getItem('token') && store.dispatch(loadUser())
const App = () => {
	return (
	<Provider store={store}>
	<Router/>
		</Provider>
	)
}

export default App;