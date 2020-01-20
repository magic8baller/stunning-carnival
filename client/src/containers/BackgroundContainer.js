import React, {Component} from 'react'
import {connect} from 'react-redux'
import './BgSettings.css'
import BackgroundButton from './BackgroundButton'
import BackgroundView from './BackgroundView.js'
class BackgroundContainer extends Component {

state= {
	active: 'Favorites'
}

handleClick = item => {
	this.setState({active: item})
}
	render () {
		const tabs = ['Favorites', 'History'];
		return (
			<div className='background'>
<h2>Backgrounds</h2>
				<p>See a new inspiring photo each day</p>
				<br />
				<ul>
					{
						tabs.map(item => {
							return (<BackgroundButton key={item} name={item} active={this.state.active} handleClick={this.handleClick} />)
						})
					}
				</ul>
				<div className="line-separator"></div>
				{this.state.active === 'Favorites' ?
					<BackgroundView handleBackgroundChange={this.props.handleBackgroundChange} active="Favorites" /> :
					<BackgroundView handleBackgroundChange={this.props.handleBackgroundChange} active="History" />
				}
			</div>
		)
	}
}
const mapStateToProps = state => ({background: state.background.currentBackground})
export default connect(mapStateToProps)(BackgroundContainer)