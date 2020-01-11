import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {clearError, loadUser} from '../../store/actions/authActions.js'
import Spinner from '../common/Spinner'
import LoginForm from './LoginForm'
class Login extends Component {

	componentDidMount () {
		this.props.loadUser()
		this.props.clearError()
		if (this.props.isAuthenticated) {
			this.props.history.push('/')
		}

		if (this.props.isLoading) {
			return (
				<div style={{textAlign: 'center'}}>
					<Spinner />
				</div>
			)
		}
	}
	render () {
		// 	if (this.props.isAuthenticated) {
		// 		this.props.loadUser()
		// 	this.props.history.push('/')
		// }

		// if (this.props.isLoading) {
		// 	return (
		// 		<div style={{textAlign: 'center'}}>
		// 			<Spinner />
		// 		</div>
		// 	)
		// }
		return (
			<section className="banner">
        <div className="banner__container">
        <h1 className="banner__title">
			WELCOME!
				</h1>
				<LoginForm {...this.props}/>
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

export default 	withRouter(connect(

	mapStateToProps,
	{loadUser, clearError}
)(Login))