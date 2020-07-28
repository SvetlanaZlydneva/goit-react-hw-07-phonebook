import { connect } from 'react-redux';
import selectors from '../../redux/contacts/selectors';
import operations from '../../redux/contacts/operations';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
