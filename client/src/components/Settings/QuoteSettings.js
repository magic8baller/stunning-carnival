import React, {Component} from 'react'

class QuoteSettings extends Component {
	render () {
		return (
			<div>

			{/* {this.props.active === 'Favorites' && this.props.quotes && this.props.quotes.map(quote => {
				<li key={quote._id}>"{quote.quote}" -{quote.author}</li>
			})} */}
				{this.props.quotes.length ? this.props.quotes.map(quote => (
					<li key={quote._id}>"{quote.quote}" -{quote.author}</li>
				))
					: 'No Quotes to Show'
				}

			</div>
		)
	}
}
export default QuoteSettings