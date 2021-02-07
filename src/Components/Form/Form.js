import React, { useState } from 'react';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts-selectors';
import * as contactsActions from '../../redux/contacts-actions';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const existNameHandler = existName => {
    const nameHandler = existName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === nameHandler);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const sameName = existNameHandler(name);
    const contact = { id: name, name, number };

    if (sameName) {
      alert(`${name} is already in your phonebook`);
    } else {
      dispatch(contactsActions.addContact(contact));
    }

    if (contact === '') {
      return alert('Enter values');
    }

    resetForm();
    setName('');
    setNumber('');
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.form_wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <form onSubmit={handleFormSubmit}>
        <div className={s.wrap__input}>
          <p className={s.caption}>Number</p>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter name"
            required
            value={name}
            onChange={handleChange}
          />
          <p className={s.caption}>Name</p>
          <input
            className={s.input}
            type="tel"
            name={'number'}
            placeholder="Enter number"
            value={number}
            onChange={handleChange}
            required
          />
        </div>

        <button className={s.contactBtn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
