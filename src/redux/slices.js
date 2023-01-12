import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    name: '',
    number: '',
    filter: '',
  },
  reducers: {
    updateNumber(state, action) {
      state.number = action.payload;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error;
    },
// ===================================================
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
// ============================================================
    [addContact.pending](state){
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action){
      state.isLoading = false;
      state.items = [...state.items, action.payload];
      state.error = null;
    },
    [addContact.rejected](state, action){
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { updateFilter, updateName, updateNumber } = textSlice.actions;
export const textReducer = textSlice.reducer;
