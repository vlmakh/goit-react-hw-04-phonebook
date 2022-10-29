import { useState, useEffect, useRef } from 'react';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const startData = [
    { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '5558801' },
    { id: nanoid(4), name: 'Sylvester Stallone', number: '5558802' },
    { id: nanoid(4), name: 'Bruce Willis', number: '5558803' },
    { id: nanoid(4), name: 'Jason Statham', number: '5558804' },
];

const savedData = JSON.parse(localStorage.getItem('phonebook'));

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(savedData ? [...savedData] : startData);
  const isFirstRender = useRef(true);


  useEffect(() => {
    if (isFirstRender.current) {
      console.log('useEffect при старте приложения ' + Date.now());
      isFirstRender.current = false;
      return;
    }
    // надо сделать отключение при первом запуске 
    console.log('useEffect при апдейтах ' + Date.now());
    localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(4),
        name: data.name,
        number: data.number,
      };

      setContacts([...contacts, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box width="360px" mx="auto" py={2}>
      <h1>Phonebook</h1>
      <AddForm onSubmit={addContact} />

      <Box p={3} mt={2} border="1px solid #212121" borderRadius={3}>
        <h2>Contacts</h2>

        <Filter value={filter} onChange={filterChange} />

        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
}

export { App };
