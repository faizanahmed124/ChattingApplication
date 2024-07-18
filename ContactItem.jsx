import React from 'react';

const ContactItem = ({ contact, onSelectContact }) => {
  return (
    <div
      className="flex items-center p-2 cursor-pointer border border-gray-300 hover:bg-gray-300 py-4 gap-2"
      onClick={() => onSelectContact(contact)}
    >
      <img
        src={contact.profilePic}
        alt={`${contact.name}'s profile`}
        className="w-10 h-10 rounded-full mr-4"
      />
      <span>{contact.name}</span>
    </div>
  );
};

export default ContactItem;
