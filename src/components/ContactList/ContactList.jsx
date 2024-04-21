import ContactCard from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default ContactList;
