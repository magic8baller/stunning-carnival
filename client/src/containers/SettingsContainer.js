import React, {Component} from 'react'
import {FaCog} from 'react-icons/fa'
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
				return 'Photo Settings'
			case 4:
				// return <SettingsQuotes quoteUpdate={this.handleQuoteUpdate} />
				return 'Quote Settings'
			default:
				return (
					<div>
						<div style={{fontSize: 20, marginBottom: 4}}>General</div>
						<div style={{fontSize: 12, color: '#999', marginBottom: 20}}>Customize your dashboard</div>

						<br />
						<br />
						<div style={{fontSize: 13, marginBottom: 8}}>CUSTOMIZE</div>
						<div className="container container-style">
							<div className="left">Theme</div>

							<div className="right-options" onClick={() => this.changeTheme("#0e254c")}>Light</div>
							<div className="right-options" onClick={() => this.changeTheme("black")}>Dark</div>
						</div>
						<div className="container container-style">
							<div className="left">Font</div>
							<div className="right-options" onClick={() => this.changeFont('-apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif')}>Classic</div>
							<div className="right-options" onClick={() => this.changeFont('Avenir, "Avenir Next", "Segoe UI", "Lucida Grande", "Lucida Sans Unicode", sans-serif')}>Modern</div>
							<div className="right-options" onClick={() => this.changeFont('NTR')}>Startup</div>
							<div className="right-options" onClick={() => this.changeFont('Inconsolata')}>Retro</div>
							<div className="right-options" onClick={() => this.changeFont('Poppins')}>Warehouse</div>
							<div className="right-options" onClick={() => this.changeFont('"Work Sans"')}>Quirky</div>
						</div>
					</div>
				)
		}
	}
	render () {
		const settingOptions = ['General', 'Focus', 'Todos', 'Photos', 'Quotes'];
		return (
			<div className='settings-container'>
				<div onClick={this.onClickSettings}>
					<FaCog className='settings-icon' alt='settings' />
				</div>
				{this.state.isOpen && (
					<div id='settings-content'>
						<div className="tab-column border-right">
							{settingOptions.map((item, i) => <div key={i} className={this.state.index === i ? "setting-tabs active" : "setting-tabs"} onClick={() => this.showSetting(i)}>{item}</div>)}

							{<button className="logout-button" onClick={this.props.logoutUser} title={this.props.user.email}>Log Out</button>}
						</div>
						<div className="setting-column">
							{this.renderSetting()}
						</div>

					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps, {logoutUser})(SettingsContainer)