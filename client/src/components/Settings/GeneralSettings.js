import React from 'react'

const GeneralSettings = ({changeTheme, changeFont}) => (
		<div>
			<div style={{fontSize: 20, marginBottom: 4}}>General</div>
			<div style={{fontSize: 12, color: '#999', marginBottom: 20}}>Customize your dashboard</div>

			<br />
			<br />
			<div style={{fontSize: 13, marginBottom: 8}}>CUSTOMIZE</div>
			<div className="container container-style">
				<div className="left">THEME:</div>
				<br /><br />
				<div className="right-options" onClick={() => changeTheme("#0e254c")}>Light</div>
				<div className="right-options" onClick={() => changeTheme("black")}>Dark</div>
			</div>
			<div className="container container-style">
				<div className="left">FONT:</div><br /><br />
				<div className="right-options" onClick={() => changeFont('-apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif')}>Classic</div>
				<div className="right-options" onClick={() => changeFont('Avenir, "Avenir Next", "Segoe UI", "Lucida Grande", "Lucida Sans Unicode", sans-serif')}>Modern</div>
				<div className="right-options" onClick={() => changeFont('NTR')}>Startup</div>
				<div className="right-options" onClick={() => changeFont('Inconsolata')}>Retro</div>
				<div className="right-options" onClick={() => changeFont('Poppins')}>Warehouse</div>
				<div className="right-options" onClick={() => changeFont('"Work Sans"')}>Quirky</div>
			</div>
		</div>
	)

	export default GeneralSettings