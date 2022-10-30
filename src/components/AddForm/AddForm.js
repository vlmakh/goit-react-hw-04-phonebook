import PropTypes from 'prop-types';
import css from './AddForm.module.css';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export function AddForm({ onSubmit }) {
  const addContact = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={addContact}
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
    >
      <Form className={css.addForm}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Box display="flex" alignItems="center" position="relative">
              <HiUserAdd />
              <Field
                className={css.addInput}
                type="text"
                name="name"
                placeholder="Name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
              />
              <ErrorMessage
                component="div"
                className={css.mistake}
                name="name"
              />
            </Box>

            <Box display="flex" alignItems="center" mt={3} position="relative">
              <HiPhone />
              <Field
                className={css.addInput}
                type="tel"
                name="number"
                placeholder="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                // required
              />
              <ErrorMessage
                component="div"
                className={css.mistake}
                name="number"
              />
            </Box>
          </Box>

          <button
            type="submit"
            className={css.addButton}
            aria-label="Add contact"
          >
            <MdOutlineDataSaverOn size="40" fill="currentColor" />
          </button>
        </Box>
      </Form>
    </Formik>
  );
}

AddForm.propTypes = {
  onSubmit: PropTypes.func,
};
