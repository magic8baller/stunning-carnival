
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {loginUser} from '../../store/actions/authActions.js'
import RenderTextInput from '../Layout/RenderTextInput'

class Login extends Component {

	onSubmit = formProps => {
		this.props.loginUser(formProps, () => {

			this.props.history.push('/')
		})
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
					<div>
						<div>
							<p>{errorMessage}</p>
						</div>
					</div>
				)}
				<div>
					<div>
						<button style={{border: 'black 2px solid', color: 'black'}} type="submit">
							Login
          </button>
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