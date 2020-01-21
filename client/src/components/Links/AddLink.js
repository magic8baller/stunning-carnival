import classNames from "classnames";
import React, {Component} from "react";

class AddLink extends Component {


	render () {

		return (
			<div className="add-link-container">
				<div>
					<span>New Link</span>
				</div>
				<div>
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
