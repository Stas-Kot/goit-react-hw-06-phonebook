import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

export const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const setFilter = value => ({
  type: types.FILTER,
  payload: value,
});
