import React, {Component} from "react";
import AddLink from "../components/Links/AddLink";
import LinkList from "../components/Links/LinkList";
import '../components/Links/Links.css'
class LinksContainer extends Component {
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
		const {fields} = this.state;
		fields[e.target.name] = e.target.value;
		this.setState({fields});
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
			{	this.state.active &&(
				<div className='list-container'>
				<LinkList links={this.state.links} deleteItem={this.deleteItem} />
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

export default LinksContainer;
