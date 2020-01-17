import {connect} from 'react-redux'
import Focus from '../components/Focus/Focus.js'
import '../components/Focus/Focus.css'
import {fetchFocus, addFocus, setFocusStatus, deleteFocus} from '../store/actions/focusActions'

const mapStateToProps = state => ({
	focus: state.focus.focus
})
export default connect(mapStateToProps, {fetchFocus, addFocus, setFocusStatus, deleteFocus})(Focus)