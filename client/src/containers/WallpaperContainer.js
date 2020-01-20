import React, {Component} from 'react'
import {connect} from 'react-redux'

import {setBackground} from '../store/actions/backgroundActions'

class WallpaperContainer extends Component {

	render () {


		return (
			<div style={this.props.bgStyle}>

			</div>
		)
	}
}
const mapStateToProps = state => ({background: state.background})
export default connect(mapStateToProps, {setBackground})(WallpaperContainer)