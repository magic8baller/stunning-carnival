import React, {Component} from 'react'
import {connect} from 'react-redux'
import './BgSettings.css'
import {setBackground} from '../store/actions/backgroundActions'
import BackgroundButton from '../components/common/TabButton'
import BackgroundView from './BackgroundPhotoList'
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
					<BackgroundView setBackground={this.props.setBackground} backgroundHistory={this.props.background.backgrounds} handleBackgroundChange={this.props.handleBackgroundChange} active="Favorites" /> :
					<BackgroundView setBackground={this.props.setBackground}  backgroundHistory={this.props.background.backgrounds} handleBackgroundChange={this.props.handleBackgroundChange} active="History" />
				}
			</div>
		)
	}
}
const mapStateToProps = state => ({background: state.background})
export default connect(mapStateToProps, {setBackground})(BackgroundContainer)