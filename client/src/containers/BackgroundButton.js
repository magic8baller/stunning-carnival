import React from 'react';

const BackgroundButton = props => {
	const handleClick = name => {
		props.handleClick(name)
	}
	if (props.name === props.active) {
		return (<li className="active" onClick={() => handleClick(props.name)}>{props.name}</li>)
	}
	return (<li onClick={() => handleClick(props.name)}>{props.name}</li>)
};



export default BackgroundButton;