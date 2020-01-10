import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dashboard from '../containers/Dashboard'
import Login from './Auth/Login'
class Landing extends Component {
	render () {
		return (
			<div>
				{this.props.isAuthenticated && this.props.token ? (<Dashboard />) : (<Login />)}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({isAuthenticated: state.auth.isAuthenticated, token: state.auth.token})

export default connect(mapStateToProps)(Landing)