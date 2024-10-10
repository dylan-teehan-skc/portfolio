import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Test backend connection on component mount
    axios.get('http://localhost:5000/test')
      .then(response => {
        setBackendStatus('Connected');
      })
      .catch(error => {
        console.error('Backend connection error:', error);
        setBackendStatus('Not connected');
      });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: input });
      setMessages([...newMessages, { text: response.data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { text: 'Sorry, an error occurred.', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages" id="chatMessages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {isLoading && <div className="message bot">Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage} disabled={isLoading}><svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-2xl"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"></path></svg></button>
      </div>
    </div>
  );
};

export default Chatbot;