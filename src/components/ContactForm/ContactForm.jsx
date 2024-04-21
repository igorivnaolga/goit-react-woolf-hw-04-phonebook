import { Formik } from 'formik';
import { Form, Field, Button, SectionInput } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  return (
    <SectionInput>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          action.resetForm();
          onAddContact(values);
        }}
      >
        <Form>
          <label htmlFor="Name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="Number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </SectionInput>
  );
};
