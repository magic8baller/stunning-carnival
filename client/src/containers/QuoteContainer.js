import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleQuote} from '../store/actions/quoteActions'
import Quote from '../components/Quote'
class QuoteContainer extends Component {

// componentDidMount() {
// 		this.props.fetchSingleQuote()
// console.log(this.props.quote)
// 	}

fetchQuote = () => {
	this.props.fetchSingleQuote()
}

	render() {
		return (
			<div className='quotes-container'>
<Quote currentQuote={this.props.quote} fetchQuote={this.fetchQuote}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({quote: state.quote.currentQuote})

export default connect(mapStateToProps, {fetchSingleQuote})(QuoteContainer)