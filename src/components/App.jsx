import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchContacts} from '../redux/operations';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <ContactList />
    </>
  );
};
