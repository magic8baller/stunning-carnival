import React, {Component} from 'react'
import {FaCog} from 'react-icons/fa'
import BackgroundContainer from './BackgroundSettingsContainer'
import GeneralSettings from '../components/Settings/GeneralSettings'
import './Setttings.css'
import {connect} from 'react-redux'
import {logoutUser} from '../store/actions/authActions'
class SettingsContainer extends Component {

	state = {
		isOpen: false,
		index: 0,
		weatherVisible: true,
		todoVisible: true,
		quoteVisible: true,
		focusVisible: true,
		noteVisible: true
	}

	onClickSettings = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

	showSetting = (i) => {
		this.setState({index: i})
	}

	changeFont = font => {
		document.body.style.fontFamily = font
	}

	renderSetting () {
		switch (this.state.index) {
			case 1:
				return 'Focus Setttings'
			case 2:
				return 'Todo Settings'
			case 3:
				return <BackgroundContainer/>
			case 4:
				// return <SettingsQuotes quoteUpdate={this.handleQuoteUpdate} />
				return 'Quote Settings'
			default:
				return <GeneralSettings changeFont={this.changeFont} changeTheme={this.changeTheme}/>

		}
	}
	render () {
		const settingOptions = ['General', 'Focus', 'Todos', 'Photos', 'Quotes'];
		return (
			<div className='settings-container'>
				<div onClick={this.onClickSettings}>
					<FaCog className='settings-icon' alt='settings' />
					{this.props.bg &&(
					<div className="location-container">
						<p className="location-title">{this.props.bg.user.location}</p>
						<p className="location-photographer">Photo by {this.props.bg.user.name}</p>
					</div>
					)}
				</div>
				{this.state.isOpen && (
					<div id='settings-modal'>
<div className="settings-panes">

						<div className="settings-side-menu">

							{settingOptions.map((item, i) => <div key={i} style={{fontSize: '16px'}} className={this.state.index === i ? "setting-tabs active" : "setting-tabs"} onClick={() => this.showSetting(i)}>{item}</div>)}

							{<button className="logout-button" onClick={this.props.logoutUser} title={this.props.user.email}>Log Out</button>}
						</div>
						<div className="settings-main-pane">
							{this.renderSetting()}
						</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user, bg: state.background.currentBackground})
export default connect(mapStateToProps, {logoutUser})(SettingsContainer)