import React from 'react';
import ContactItem from './ContactItem';

const contacts = [
  { id: 1, name: 'Faizan', profilePic: 'images/dp1.png' },
  { id: 2, name: 'Shaoib', profilePic: 'images/dp2.png' },
  { id: 3, name: 'Gul', profilePic: 'images/dp3.png' },
  { id: 4, name: 'Asad', profilePic: 'images/dp4.png' },
  { id: 5, name: 'Ahmed', profilePic: 'images/dp5.png' },
  { id: 6, name: 'Saad', profilePic: 'images/dp6.png' },
  { id: 7, name: 'Farhan', profilePic: 'images/dp7.png' },
  { id: 8, name: 'Tanzeel', profilePic: 'images/dp1.png' },
];

const ContactList = ({ onSelectContact }) => {
  return (
    <div className="w-full md:w-1/3 bg-gray-100 p-4">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onSelectContact={onSelectContact} />
      ))}
    </div>
  );
};

export default ContactList;
