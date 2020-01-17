import React, {Component} from "react";
import {FaSearch} from "react-icons/fa";

class Search extends Component {
state = {
			text: ""
		};

	openSearch = () => {
		const param = this.state.text;
		const googURL = `https://www.google.com/search?q=${param}`;
		window.open(googURL, "_blank");
	};

	handleChange = e => {
		this.setState({text: e.target.value});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.openSearch();
		this.setState({
			text: ""
		});
	};

	render () {
		return (
			<div className="search-container">
				<form className="search-form" onSubmit={this.handleSubmit}>
					<span className="search-underline">
						<FaSearch className="search-icon" />
						<input
							className="search-form-input"
							type="text"
							value={this.state.text}
							onChange={this.handleChange}
						/>
					</span>
				</form>
			</div>
		);
	}
}

export default Search;
