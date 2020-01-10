
import React, {Component} from 'react'
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {loginUser} from '../../store/actions/authActions.js'
import {Link} from 'react-router-dom'
import RenderTextInput from '../Layout/RenderTextInput'

import {connect} from 'react-redux'
class Login extends Component {

	onSubmit = formProps => {
		this.props.loginUser(formProps)
		console.log(formProps)
	}
	render () {
		const {handleSubmit, errorMessage} = this.props
		return (

			<form onSubmit={handleSubmit(this.onSubmit)}>

					<Field
						name='email'
						type='email'
						component={RenderTextInput}
						placeholder='Enter Email'
					/>

					<label htmlFor="Password">Password: </label>
					<Field
						name='password'
						type='password'
						component={RenderTextInput}
						placeholder='Enter Password'
					/>

				{errorMessage && (
					<div className="field">
						<div className="control">
							<p className="help is-danger is-size-6">{errorMessage}</p>
						</div>
					</div>
				)}
				<div className="field">
					<div className="control">
						<button className="button is-danger is-fullwidth" type="submit">
							Login
          </button>
					</div>
				</div>

				<div className="field is-pulled-right">
					<div className="control">
						<Link className="is-link" to="/register">
							Don't have an account? Sign up here
          </Link>
					</div>
				</div>
			</form>

		)
	}
}

const validateForm = ({email, password}) => {
	const fieldErrors = {}

	if (typeof password === 'string') {
		if (password.length < 7) {
			fieldErrors.password = 'Invalid password: It must include a minimum of 7 characters'
		}
	}

	if (!email) {
		fieldErrors.email = 'Email is required'
	}

	if (!password) {
		fieldErrors.password = 'Password is required'
	}
return fieldErrors
}

const mapStateToProps = state => ({errorMessage: state.auth.errorMessage})

export default compose(
	connect(mapStateToProps, {loginUser}),
	reduxForm({form: 'login', validateForm})

)(Login)