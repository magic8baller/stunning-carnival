import React, {Component} from "react";

import AddLink from "./AddLink";
import LinkItem from "./LinkItem";
import classNames from "classnames";
import './Links.css'
class Links extends Component {
	constructor (props) {
		super(props);
		this.state = {
			links: [],
			fields: {
				name: "",
				url: ""
			},
			active: false
		};
	}

	componentDidMount () {
		const localKeys = Object.keys(localStorage).filter(key =>
			key.includes("links-item")
		);
		const restoredLocal = localKeys.map(item => {
			return JSON.parse(localStorage.getItem(item));
		});
		this.setState({links: restoredLocal});
	}

	handleChange = e => {
		const fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({fields});
		console.log("state", this.state.fields);
	};

	handleSubmit = e => {
		let newLink = {
			name: this.state.fields.name,
			url: this.state.fields.url,
			id: Date.now()
		};
		const stringifyNewLink = JSON.stringify(newLink);
		localStorage.setItem(`links-item-${newLink.id}`, stringifyNewLink);

		const localKeys = Object.keys(localStorage).filter(key =>
			key.includes("links-item")
		);
		const restoredLocal = localKeys.map(item => {
			return JSON.parse(localStorage.getItem(item));
		});

		this.setState((prevState, {links}) => ({
			links: restoredLocal,
			fields: {
				name: "",
				url: ""
			}
		}));
		e.preventDefault();
	};

	deleteItem = id => {
		localStorage.removeItem(`links-item-${id}`);
		this.setState((prevState, {links}) => ({
			links: prevState.links.filter(item => item.id !== id)
		}));
	};

	activeHandler = () => {

			this.setState({active: !this.state.active});

	};

	render () {

		return (
			<div className="links-container">
				<div className="links-click-label">
					<span onClick={this.activeHandler}>Links</span>
				</div>

			{	this.state.active &&(<div className='list-container'>
					<li className="links-list-item"><a href='http://google.com' target='_blank'>New Chrome Tab</a></li><LinkItem links={this.state.links} deleteItem={this.deleteItem} />
					<AddLink
						name={this.state.fields.name}
						url={this.state.fields.url}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</div>)}
			</div>
		);
	}
}

export default Links;
