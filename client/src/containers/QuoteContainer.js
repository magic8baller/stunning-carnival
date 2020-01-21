import React, {Component} from 'react'
import {connect} from 'react-redux'
import Quote from '../components/Quote'
import {fetchSingleQuote} from '../store/actions/quoteActions'
class QuoteContainer extends Component {

	fetchQuote = () => {
		this.props.fetchSingleQuote()
	}

	render () {
		return (
			<div className='quotes-container'>
				<Quote currentQuote={this.props.quote} fetchQuote={this.fetchQuote} />
			</div>
		)
	}
}

const mapStateToProps = state => ({quote: state.quote.currentQuote})

export default connect(mapStateToProps, {fetchSingleQuote})(QuoteContainer)