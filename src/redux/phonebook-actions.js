import { v4 as uuidv4 } from 'uuid';
import actionTypes from './phonebook-types';

export const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

// export const getFiltredContacts = filter => ({
//   type: 'phonebook/deleteContact',
//   payload: filter,
// });
