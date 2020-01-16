import React, {Component} from 'react'
import {FaCog} from 'react-icons/fa'
import {connect} from 'react-redux'
import {logoutUser} from '../store/actions/authActions'
class SettingsContainer extends Component {

	state = {
		isOpen: false
	}

	onClickSettings = () => {
		this.setState({isOpen: !this.state.isOpen})
	}
	render () {
		return (
			<div className='settings-container'>
				<div onClick={this.onClickSettings}>
					<FaCog className='settings-icon' alt='settings' />
				</div>
				{this.state.isOpen && (
					<div id='settings-content'>
						<div className="tab-column border-right">
							{this.props.user.email}
							{<button className="logout-button" onClick={this.props.logoutUser} title={this.props.user.email}>Log Out</button>}
						</div>
						<div className="setting-column">
							settings
						</div>

					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps, {logoutUser})(SettingsContainer)