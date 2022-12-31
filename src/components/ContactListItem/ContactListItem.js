import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';

export function ContactListItem({ id, name, number, deleteContact }) {
  return (
    <li className={css.contactItem}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        type="button"
        className={css.delButton}
        onClick={() => deleteContact(id)}
        aria-label="Delete number"
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
