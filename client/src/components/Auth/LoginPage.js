import React, {Component} from 'react'
import {connect} from 'react-redux'
import {clearError, loadUser, loginWithToken} from '../../store/actions/authActions.js'
import Spinner from '../common/Spinner'
import LoginForm from './LoginForm'
class Login extends Component {

	// componentDidMount () {
	// 	this.props.loadUser()
	// 	this.props.clearError()
	// 	if (this.props.isAuthenticated) {
	// 		this.props.history.push('/')
	// 	}

	// 	if (this.props.isLoading) {
	// 		return (
	// 			<div style={{textAlign: 'center'}}>
	// 				<Spinner />
	// 			</div>
	// 		)
	// 	}
	// }
	render () {
			if (this.props.isAuthenticated) {
				this.props.loginWithToken(localStorage.getItem('token'))
			this.props.history.push('/')
		}

		if (this.props.isLoading) {
			return (
				<div style={{textAlign: 'center'}}>
					<Spinner />
				</div>
			)
		}
		return (
			<section class="banner">
        <div class="banner__container">
        <h1 class="banner__title">
			WELCOME!
				</h1>
				<LoginForm />
			</div>
			</section>
		)
	}
}

const mapStateToProps = state => ({

	isAuthenticated: state.auth.isAuthenticated,
	loginError: state.auth.errorMesage,
	isLoading: state.auth.isLoading
})

export default connect(
	mapStateToProps,
	{loadUser, clearError, loginWithToken}
)(Login)