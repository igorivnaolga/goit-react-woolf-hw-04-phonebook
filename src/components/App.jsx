import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Container, Title, SubTitle } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    const contact = { ...values, id: nanoid() };
    const { contacts } = this.state;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already on contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  updateFilter = values => {
    this.setState({
      filter: values,
    });
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} onFilter={this.updateFilter} />
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.handleDelete}
          />
        )}
      </Container>
    );
  }
}
