
import React, {Component} from 'react'
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {loginUser} from '../../store/actions/authActions.js'

import {connect} from 'react-redux'
class Login extends Component {

	onSubmit = formProps => {
		this.props.loginUser(formProps, () => {
			this.props.history.push('/')
		})
		console.log(formProps)
	}
	render () {
		const {handleSubmit} = this.props
		return (

			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label htmlFor="Email">Email: </label>
					<Field
						name='email'
						type='text'
						component='input'
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="Password">Password: </label>
					<Field
						name='password'
						type='password'
						component='input'
					/>
				</fieldset>
				<div>{this.props.errorMessage}</div>
				<button>Sign In!</button>
			</form>

		)
	}
}
const mapStateToProps = state => ({errorMessage: state.auth.errorMessage})
export default compose(
	connect(mapStateToProps, {loginUser}),
	reduxForm({form: 'login'})

)(Login)