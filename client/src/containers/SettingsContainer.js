import React, {Component} from 'react'
import {FaCog} from 'react-icons/fa'
import BackgroundContainer from './BackgroundContainer'
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
				return <BackgroundContainer handleBackgroundChange={this.props.handleBackgroundChange}/>
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
							<div className="left">THEME:</div>
<br/><br/>
							<div className="right-options" onClick={() => this.changeTheme("#0e254c")}>Light</div>
							<div className="right-options" onClick={() => this.changeTheme("black")}>Dark</div>
						</div>
						<div className="container container-style">
							<div className="left">FONT:</div><br/><br/>
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

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps, {logoutUser})(SettingsContainer)