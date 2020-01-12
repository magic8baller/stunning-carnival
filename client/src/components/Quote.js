import React from "react";

const Quote = ({currentQuote:{quote,author}, fetchQuote}) => {

	return (
		<div className="quote-layout-container">
			<div className="quote-display">
				<p className="quote-item" onClick={fetchQuote}>
					{quote}
				</p>
			</div>
			<div className="author-twitter-container">
				<p className="author">{author}</p>
				<span className="twitter-container">

				</span>
			</div>
		</div>
	);
};

export default Quote;
