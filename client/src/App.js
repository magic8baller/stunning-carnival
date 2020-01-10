import React from 'react'
import Greeting from './components/Greeting'
import Dashboard from './containers/Dashboard'
import {Provider} from 'react-redux'
import store from './store'
const App = () => {
	return (
	<Provider store={store}>
	<Dashboard/>
		</Provider>
	)
}

export default App;