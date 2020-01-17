import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import history from './history'

import Login from './containers/LoginPage'
import AddTodoForm from './components/Todos/AddTodoForm'
import Register from './containers/RegisterPage'
import PrivateRoute from './components/common/PrivateRoute'
import Dashboard from './containers/Dashboard'
import Landing from './containers/Landing'
import Main from './components/Main'


const Router = () => (
	<BrowserRouter history={history}>
		<Main>
			<Route path='/' history={history} exact component={Landing} />
			<Route path='/register' component={Register} />

			<Route path='/login' component={Login} />
			<Switch>

				<PrivateRoute path='/dashboard' exact component={Dashboard} />
				<PrivateRoute path="/addTodo" exact component={AddTodoForm} />
			</Switch>
		</Main>
	</BrowserRouter>
)

export default Router