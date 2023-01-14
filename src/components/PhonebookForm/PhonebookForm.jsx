import styles from './PhonebookForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { updateName, updateNumber } from '../../redux/slices';
import { addContact } from '../../redux/operations';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.textUtilities.name);
  const number = useSelector((state) => state.textUtilities.number);
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <section>
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>
        <form className={styles.phonebookForm}>
          <label className={styles.phonebookLabel}>
            Name
            <input
              onChange={(ev) => dispatch(updateName(ev.target.value))}
              value={name}
              className={styles.phonebookInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.phonebookLabel}>
            Number
            <input
              className={styles.phonebookInput}
              onChange={(ev) => dispatch(updateNumber(ev.target.value))}
              value={number}
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button
            className={styles.phonebookButton}
            type="submit"
            onClick={(ev) => {
              ev.preventDefault();
              console.log(ev.target.element);
              if (!contacts.map((contact) => contact.name).includes(name)) {
                dispatch(
                  addContact({
                    id: nanoid(),
                    name: name,
                    number: number,
                  })
                );
              } else {
                alert(`${name} is already in contacts.`);
              }
            }}
          >
            Add Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default PhonebookForm;
