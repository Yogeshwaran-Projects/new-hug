'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto bg-gray-900 text-white h-screen">
      <div className="flex-1 overflow-auto p-4">
        {messages.map(m => (
          <div key={m.id} className={`mb-4 p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-600 text-white text-right' : 'bg-gray-700 text-white'}`}>
            {m.role === 'user' ? 'You: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-2 bg-gray-800 border-t border-gray-700">
        <input
          className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
