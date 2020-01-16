import classNames from "classnames";
import React, {Component} from "react";

class AddLink extends Component {
	constructor (props) {
		super(props);
		this.state = {
			addLink: false
		};
	}

	addLinkToggle = () => {
		this.setState({addLink: !this.state.addLink});
	};

	render () {
		let linkFormToggle = classNames({
			"add-link-form": true,
			hidden: !this.state.addLink
		});
		let linkLabelToggle = classNames({
			"add-link-click-label": true,
			hidden: this.state.addLink
		});
		return (
			<div className="add-link-container">
				<div className={linkLabelToggle} onClick={this.addLinkToggle}>
					<span>New Link</span>
				</div>
				<div className={linkFormToggle}>
					<form onSubmit={this.props.handleSubmit}>
						<input
							className="add-link-input"
							name="name"
							type="text"
							placeholder="Name"
							value={this.props.name}
							onChange={this.props.handleChange}
						/>
						<input
							className="add-link-input"
							name="url"
							type="text"
							placeholder="URL"
							value={this.props.url}
							onChange={this.props.handleChange}
						/>
						<input className="add-link-input-button" type="submit" value="+" />
					</form>
					<span className="add-link-close-button" onClick={this.addLinkToggle}>
						X
          </span>
				</div>
			</div>
		);
	}
}

export default AddLink;
