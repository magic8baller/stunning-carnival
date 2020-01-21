import React, {Component} from 'react'
import {connect} from 'react-redux'
import TabButton from '../components/common/TabButton'
import QuoteSettings from '../components/Settings/QuoteSettings'
import AddQuote from '../components/Settings/AddQuote.js'
import {addQuote, fetchUserQuotes, setFavoriteQuote} from '../store/actions/quoteActions'
import './Quote.css'
class QuoteSettingsContainer extends Component {

	state = {
		active: 'My Quotes'
	}

	componentDidMount () {
		this.props.fetchUserQuotes();
	}
	handleClick = item => {
		this.setState({active: item})
	}
	render () {
		const tabs = ['My Quotes', 'Favorites', 'History'];
		return (
			<div className='background'>
				<div style={{float: 'left'}}>
					<h2>Quotes</h2>
					<p>A daily reminder for inspiration and growth</p>
				</div>
				<div style={{marginTop: '2rem', float: 'right'}} className='add-button' onClick={() =>this.handleClick('Add Quote')}>Add Quote + </div>
				<div style={{clear: 'right'}}></div>
				<div style={{clear: 'left'}}>
					<ul>
						{
							tabs.map(item => {
								return (<TabButton key={item} name={item} active={this.state.active} handleClick={this.handleClick} />)
							})
						}
					</ul>
					<div className="line-separator"></div>
					{this.state.active === 'My Quotes' && (
						<QuoteSettings quotes={this.props.quote.quotes} setFavoriteQuote={this.props.setFavoriteQuote} active="My Quotes" />
					)}
					{this.state.active === 'Favorites' && (
						<QuoteSettings quotes={this.props.quote.quotes.filter(q => q.userFavorite)} setFavoriteQuote={this.props.setFavoriteQuote} active="Favorites" />
					)}
					{this.state.active === 'History' && (
						<QuoteSettings quotes={this.props.quote.quotes} setFavoriteQuote={this.props.setFavoriteQuote} active="History" />
					)}
					{this.state.active === 'Add Quote' && (
						<AddQuote addQuote={this.props.addQuote}/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({quote: state.quote})

export default connect(mapStateToProps, {addQuote, setFavoriteQuote, fetchUserQuotes})(QuoteSettingsContainer)