import { connect } from 'react-redux';
import selectors from '../../redux/contacts/selectors';
import operations from '../../redux/contacts/operations';
import App from './App';

const mapStateToProps = state => ({
  contactsLenght: selectors.getTotalCountContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
