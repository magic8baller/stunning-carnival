import React from 'react';

const BackgroundImageItem = props => {
	function handleHeartClicked () {
		props.handleFavorite(props.image.url);
	}

	function handleBackgroundClicked () {
		props.handleBackgroundChange(props.image.url);
	}

	// const favoriteHeart = props.image.userFavorite ?
		// <i onClick={handleHeartClicked} className="fa fa-heart" aria-hidden="true"></i> :
		// <i onClick={handleHeartClicked} className="fa fa-heart-o" aria-hidden="true"></i>;

	if (!props.image.urls) {
		return null;
	}

	return (
		<div className="backgroundImageItem">
			<img src={props.image.urls.raw} width="54px" height="54px" onClick={()=> props.handleBackgroundChange(props.image.urls.full)} />
			<div className="heartInBackgroundHistory">
				{/* {favoriteHeart} */}
			</div>
		</div>
	)
}

export default BackgroundImageItem