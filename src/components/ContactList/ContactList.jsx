import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './ContactList.module.scss';
import Filter from '../Filter/Filter';


const ContactList = () => {
  const { items, isLoading } = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.textUtilities.filter);

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <Circles
          height="40"
          width="40"
          color="#494949"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          style={{marginLeft: '20px'}}
        />
      )}
      <ul>
        {items
          .filter((contact) => contact.name.includes(filter))
          .map((contact) => {
            return (
              <li key={contact.id} className={styles.contact}>
                {contact.name}: {contact.number}{' '}
                <DeleteButton contactId={contact.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
