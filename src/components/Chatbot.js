import React, { useState } from 'react';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, user: true }]);
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages(msgs => [...msgs, { text: data.response, user: false }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <div className="h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.user ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.user ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;