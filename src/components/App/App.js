import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Section from '../Section';
import ContactsForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  static propTypes = {
    contactsLenght: PropTypes.number.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const { contactsLenght } = this.props;
    return (
      <Container>
        <ContactsForm />
        {contactsLenght > 0 && (
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        )}
      </Container>
    );
  }
}

export default App;
