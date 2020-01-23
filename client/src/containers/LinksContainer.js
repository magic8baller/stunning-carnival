import React, {Component} from "react";
import AddLink from "../components/Links/AddLink";
import {connect} from "react-redux"
import {fetchLinks, addLink, deleteLink, editLink} from '../store/actions/linkActions.js'
import LinkList from "../components/Links/LinkList";
import '../components/Links/Links.css'
class LinksContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			localLinks: [],
			fields: {
				name: "",
				url: ""
			},
			active: 'Links',
			open: false
		};
	}

	componentDidMount () {
		this.props.fetchLinks()
	}

	handleChange = e => {
		const {fields} = this.state;
		fields[e.target.name] = e.target.value;
		this.setState({fields});
	};

	handleSubmit = e => {
		e.preventDefault();
		let newLink = {
			name: this.state.fields.name,
			url: this.state.fields.url
		};
		this.props.addLink(newLink)


		this.setState({
			fields: {
				name: "",
				url: ""
			},
			active: 'Links'
		});
	};

	deleteItem = id => {
		this.props.deleteLink(id);
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
				<LinkList links={this.props.links} deleteItem={this.deleteItem} />
				<div onClick={() => this.activeHandler('New Link')}>
				New Link +
				</div>
				</div>)}
			{	this.state.open && this.state.active === 'New Link' &&(
				<div className='list-container'>
					<AddLink
					editLink={this.props.editLink}
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


const mapStateToProps = state => ({links: state.link.links})

export default connect(mapStateToProps, {fetchLinks, addLink, deleteLink, editLink})(LinksContainer)
