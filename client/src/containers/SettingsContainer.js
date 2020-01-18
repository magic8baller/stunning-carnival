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

	showHideComponents () {
		const visible = ['weatherVisible', 'todoVisible', 'quoteVisible', 'focusVisible', 'noteVisible'];
		const items = ['Weather', 'Todo', 'Quote', 'Focus', 'Note'];
		return visible.map((item, index) =>
			<div key={index} className="container container-style cursor-pointer user-select-none"
				onClick={() => {
					this.setState({[visible[index]]: !this.state[visible[index]]});
					var custom = JSON.parse(localStorage.getItem("customization"));
					custom[item] = !this.state[visible[index]];
					localStorage.setItem("customization", JSON.stringify(custom));
				}}>
				<div className="left">{items[index]}</div>
				<input
					type="checkbox"
					className="right"
					checked={this.state[visible[index]]}
					onChange={() => {}} />
			</div>
		);
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
						<div style={{fontSize: 13, marginBottom: 8}}>SHOW</div>
						{/* {this.showHideComponents()} */}
						<br />
						<br />
						<div style={{fontSize: 13, marginBottom: 8}}>CUSTOMIZE</div>
						<div className="container container-style">
							<div className="left">Theme</div>
							<div className="right-options" onClick={() => this.changeTheme("#007777")}>Blue green</div>
							<div className="right-options" onClick={() => this.changeTheme("#565655")}>Grey</div>
							<div className="right-options" onClick={() => this.changeTheme("#007729")}>Green</div>
							<div className="right-options" onClick={() => this.changeTheme("#4d0656")}>Purple</div>
							<div className="right-options" onClick={() => this.changeTheme("#0e254c")}>Navy Blue</div>
							<div className="right-options" onClick={() => this.changeTheme("black")}>Black</div>
						</div>
						<div className="container container-style">
							<div className="left">Font</div>
							<div className="right-options" onClick={() => this.changeFont('Calibri')}>Calibri</div>
							<div className="right-options" onClick={() => this.changeFont('Times New Roman')}>Times New Roman</div>
							<div className="right-options" onClick={() => this.changeFont('Century Gothic')}>Century Gothic</div>
							<div className="right-options" onClick={() => this.changeFont('Trebuchet MS')}>Trebuchet MS</div>
							<div className="right-options" onClick={() => this.changeFont('Arial')}>Arial</div>
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
							{settingOptions.map((item, i) => <div key={i} className={this.state.index === i ? "setting-tabs active" : "setting-tabs"} onClick={this.showSetting.bind(this, i)}>{item}</div>)}
							{this.props.user.email}
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