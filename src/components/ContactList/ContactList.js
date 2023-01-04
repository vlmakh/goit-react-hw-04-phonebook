import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
