import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/phonebook-actions';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContact from 'components/SearchContact/SearchContact';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   formSubmitHandler = ({ name, number }) => {
//     const contact = {
//       name,
//       number,
//       id: uuidv4(),
//     };
//     this.state.contacts.find(savedContact => savedContact.name === name)
//       ? alert(`${name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, contact],
//         }));
//   };

//   handleSearch = e => {
//     this.setState({ filter: e.target.value });
//   };

//   handleDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   getFiltredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState !== this.state) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const filtredContacts = this.getFiltredContacts();

//     return (
// <div>
//   <h1>Phonebook</h1>
//   <PhonebookForm handleSubmit={this.formSubmitHandler} />

//   <h2>Contacts</h2>
//   <SearchContact value={filter} inputChange={this.handleSearch} />
//   <ContactList
//     contacts={filtredContacts}
//     handleDelete={this.handleDelete}
//   />
// </div>
//     );
//   }
// }

function App({ filtredContacts, formSubmitHandler, handleDelete }) {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm handleSubmit={formSubmitHandler} />

      {/* <h2>Contacts</h2>
      <SearchContact value={filter} inputChange={this.handleSearch} /> */}
      <ContactList contacts={filtredContacts} handleDelete={handleDelete} />
    </div>
  );
}

const mapStateToProps = state => ({
  filtredContacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  formSubmitHandler: contact => dispatch(actions.addContact(contact)),
  handleDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
