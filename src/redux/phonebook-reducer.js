import { combineReducers } from 'redux';
import types from './phonebook-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return state.find(savedContact => savedContact.name === payload.name)
        ? (alert(`${payload.name} is already in contacts`), [...state])
        : [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
