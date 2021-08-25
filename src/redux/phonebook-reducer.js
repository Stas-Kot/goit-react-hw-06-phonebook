import { combineReducers } from 'redux';
import actionTypes from './phonebook-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return state.find(savedContact => savedContact.name === payload.name)
        ? (alert(`${payload.name} is already in contacts`), [...state])
        : [...state, payload];

    case actionTypes.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => state;

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
