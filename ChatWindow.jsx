import React, { useState } from 'react';

const ChatWindow = ({ contact }) => {
  const backgroundColors = [
    'bg-red-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-pink-100',
    'bg-purple-100',
    'bg-indigo-100',
    'bg-gray-100',
  ];

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const getColor = (id) => {
    return backgroundColors[id % backgroundColors.length];
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage(''); // Clear the input field after sending the message.
    }
  };

  return (
    <div className={`w-3/4 h-full p-4 ${getColor(contact.id)} flex flex-col`}>
      <div className="relative mb-10">
        <img
          src={contact.profilePic}
          alt={`${contact.name}'s profile`}
          className="absolute w-16 h-16 rounded-full"
          style={{ top: '-8px', left: '-8px' }}
        />
        <h2 className="text-2xl font-bold ml-20">
          {contact.name}
        </h2>
      </div>
      <div>
          Chat content with {contact.name} goes here...
        </div>
      <div className='flex-1 mb-4 overflow-auto'>
        <div className="flex justify-end">
          <div className="max-w-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-2 mb-2 rounded-lg "
                style={{ marginRight: '20px' }}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      
      </div>
      <div className='mt-auto flex'>
        <input
          type="text"
          className='h-10 w-full border p-2'
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className='bg-blue-500 text-white h-10 px-4 ml-2 rounded'
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
