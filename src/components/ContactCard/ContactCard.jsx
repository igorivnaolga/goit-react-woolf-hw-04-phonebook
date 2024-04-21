import { Item, Btn } from './ContactCard.styled';

const ContactCard = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <Item key={id}>
      <span>{name}: </span>
      <span>{number} </span>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
      </Btn>
    </Item>
  );
};

export default ContactCard;
