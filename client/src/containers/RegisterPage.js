import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Spinner from '../components/common/Spinner'
import RegisterForm from '../components/Auth/RegisterForm'
class registerPage extends Component {

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
						Sign Up!
				</h1>
					<RegisterForm />
				</div>
				<div className="field is-pulled-right">
					<div className="control">
						<Link className="is-link" to="/login">
							Already have an account? Log in here
          </Link>
					</div>
				</div>
			</section>
		)
	}
}


const Register = withRouter(registerPage)
export default Register