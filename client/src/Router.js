import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import history from './history'

import Login from './components/Auth/Login'

import Register from './components/Auth/Register'
import PrivateRoute from './components/common/PrivateRoute'
import Dashboard from './containers/Dashboard'
import Landing from './components/Landing'
import Main from './components/Main'


const Router = () => (
	<BrowserRouter history={history}>
		<Main>
			<Route path='/' exact component={Landing} />
			<Route path='/register' component={Register} />

			<Route path='/login' component={Login} />
			<Switch>

				<PrivateRoute path='/dashboard' exact component={Dashboard} />

			</Switch>
		</Main>
	</BrowserRouter>
)

export default Router