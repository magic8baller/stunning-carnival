import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearError, loadUser, loginWithToken} from '../../store/actions/authActions.js'
import Spinner from '../common/Spinner'
import LoginForm from './LoginForm'

class LoginPage extends Component {


	render () {
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
					<LoginForm history={this.props.history} />
				</div>
				<div className="field is-pulled-right">
					<div className="control">
						<Link className="is-link" to="/register">
							Don't have an account? Sign up here
          </Link>
					</div>
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
)(LoginPage)