import { Component } from 'react';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContact from 'components/SearchContact/SearchContact';

class App extends Component {
  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm />

        <h2>Contacts</h2>
        <SearchContact />
        <ContactList />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <PhonebookForm />

//       <h2>Contacts</h2>
//       <SearchContact  />
//       <ContactList  />
//     </div>
//   );
// }

export default App;
