import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {withRouter} from 'react-router-dom'
import {registerUser} from '../../store/actions/authActions'
class Register extends Component {

	onSubmit = formProps => {
		this.props.registerUser(formProps, () => {

			this.props.history.push('/')
		})
		console.log(formProps)
	}
	render () {
		const {handleSubmit} = this.props
		return (

			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label htmlFor="Name">Name: </label>
					<Field
						name='name'
						type='text'
						component='input'
					/>
				</fieldset>
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
				<button style={{border: 'black 2px solid', color: 'black'}}>Sign Up!</button>
			</form>

		)
	}
}
const mapStateToProps = state => ({errorMessage: state.auth.errorMessage})
export default compose(
	withRouter,
	connect(mapStateToProps, {registerUser}),
	reduxForm({form: 'register'})

)(Register)