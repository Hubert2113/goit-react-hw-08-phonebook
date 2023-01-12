import { configureStore } from '@reduxjs/toolkit';
import { textReducer, contactsReducer } from './slices';

const store = configureStore({
  reducer: {
    textUtilities: textReducer,
    contacts: contactsReducer,
  },
});

export default store;
