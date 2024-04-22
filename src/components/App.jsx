import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Container, Title, SubTitle } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const LsKey = 'contacts';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem(LsKey);
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LsKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    const contact = { ...values, id: nanoid() };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already on contacts`);
      return;
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const updateFilter = values => {
    setFilter(values);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} onFilter={updateFilter} />
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onDelete={handleDelete} />
      )}
    </Container>
  );
};
