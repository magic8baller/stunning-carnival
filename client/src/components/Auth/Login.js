import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import LoginPage from './LoginPage'
class Login extends Component {
render() {
	return (
		<LoginPage {...this.props}/>
	)
}
}
const LoginHOC = withRouter(Login)

export default LoginHOC