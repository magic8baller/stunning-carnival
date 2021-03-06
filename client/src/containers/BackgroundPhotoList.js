import React, {Component} from 'react'
import BackgroundImageItem from '../components/Settings/BackgroundImageItem'

class BackgroundView extends Component {
	handleFavorite = clickedBg => {
		console.log(clickedBg)
	}

	handleBgChange = (bg) => {
		this.props.setBackground({
			backgroundImage: `url("${bg}"),
			url('../assets/img/overlay-vignette.png')`,
			backgroundPosition: 'relative',
			backgroundRepeat: 'no-repeat center center fixed',
			backgroundSize: 'cover'
		})
	}
	render () {
		const {backgroundHistory} = this.props
		let backgroundsToRender = []
		if (this.props.active === 'Favorites') {
			backgroundsToRender = backgroundHistory.filter(background => {
				return background.userFavorite === true
			})
		} else if (this.props.active === 'History') {
			backgroundsToRender = [...backgroundHistory].reverse().slice(0, 21)
		}

		return (
			<div className='backgroundHistoryViewContainer'>
				{backgroundsToRender.length ?
					backgroundsToRender.map((image, index) =>
						<BackgroundImageItem
							key={image._id}
							image={image}
							handleFavorite={this.handleFavorite}
							handleBackgroundChange={() => this.handleBgChange(image.urls.full)}
						/>)
					:
					'No Images to Show'
				}
			</div>
		)
	}
}

export default BackgroundView