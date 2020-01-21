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
			active: 'Links',
			open: false
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
			},

			active: 'Links'
		}));
		e.preventDefault();
	};

	deleteItem = id => {
		localStorage.removeItem(`links-item-${id}`);
		this.setState((prevState, {links}) => ({
			links: prevState.links.filter(item => item.id !== id)
		}));
	};

	activeHandler = (item) => {
		this.setState({active: item})
	};

	handleOpen = () => {
		this.setState({open: !this.state.open})
	}

	render () {

		return (
			<div className="links-container">
				<div className="links-click-label">
					<span onClick={() => this.handleOpen()}>Links</span>
				</div>
			{	this.state.open && this.state.active === 'Links' &&(
				<div className='list-container'>
				<LinkList links={this.state.links} deleteItem={this.deleteItem} />
				<div onClick={() => this.activeHandler('New Link')}>
				New Link +
				</div>
				</div>)}
			{	this.state.open && this.state.active === 'New Link' &&(
				<div className='list-container'>

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
