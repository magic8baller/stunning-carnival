import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadUser} from '../../store/actions/authActions.js'
const PrivateRoute = ({loadUser, component: Component, auth, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			(auth.isAuthenticated && auth.token) ? (
				<Component {...props} />
			) : (
					// <Redirect to="/" />
					<Redirect to = {{ pathname: '/login', state: {from: props.location} }}/>
				)
		}
	/>
)

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, {loadUser})(PrivateRoute)