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
			<Route path='/' history={history} exact component={Landing} />
			<Route path='/register' history={history} component={Register} />

			<Route path='/login' history={history} component={Login} />
			<Switch>

				<PrivateRoute path='/dashboard' history={history} exact component={Dashboard} />

			</Switch>
		</Main>
	</BrowserRouter>
)

export default Router