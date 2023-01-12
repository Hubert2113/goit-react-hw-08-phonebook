import { useDispatch } from 'react-redux';
import styles from './DeleteButton.module.scss';
import { deleteContact } from '../../redux/operations';

const DeleteButton = ({ contactId }) => {
  const dispatch = useDispatch();

  const deleteContactDOM = () => {
    dispatch(deleteContact(contactId));
  }

  return (
    <button
      className={styles.button}
      onClick={deleteContactDOM}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
