import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign In'
});


const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);