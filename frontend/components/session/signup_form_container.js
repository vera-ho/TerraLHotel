import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Register'
})


const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);