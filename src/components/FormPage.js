import React, { useState } from 'react';

const FormPage = () => {
  const [chatbotId, setChatbotId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chatbotId.trim() === '') {
      setMessage('Chatbot ID cannot be empty.');
    } else {
      fetch('https://cf30-203-110-242-41.ngrok-free.app/slack/save_chatbot_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatbotId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = `https://slack.com/oauth/v2/authorize?client_id=7269374891522.7465717411969&scope=app_mentions:read,channels:read,chat:write,chat:write.public,groups:read,im:read,im:write,mpim:read&redirect_uri=https://cf30-203-110-242-41.ngrok-free.app/slack/oauth_redirect`;
        } else {
          setMessage('Failed to save Chatbot ID. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Failed to save Chatbot ID. Please try again.');
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-10 rounded-lg">
        <div className="flex justify-center items-center mb-10" style={{ marginTop: '-20px' }}>
          <img src={`${process.env.PUBLIC_URL}/chatcells-logo.png`} alt="Chatcells Logo" className="w-14 h-14 mb-2" />
          <h2 className="text-4xl font-normal mb-2 ml-3">Chatcells</h2>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-10">
            <label htmlFor="chatbotId" className="block text-gray-700">Chatbot ID</label>
            <input
              id="chatbotId"
              type="text"
              placeholder="Chatbot ID"
              value={chatbotId}
              onChange={(e) => setChatbotId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-1/2 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors mx-auto block"
          >
            Submit
          </button>
          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default FormPage;
