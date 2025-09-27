import React from "react";
import { IoSendOutline } from "react-icons/io5";

const ChatBot = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full flex flex-col gap-4">
        <h1 className="text-green-700 text-2xl font-bold">AI Chatbot</h1>

        {/* Chat Window */}
        <div className="flex-1 min-h-[300px] bg-gray-50 border rounded-lg p-3 overflow-y-auto">
          {/* Example messages */}
          <div className="text-left text-sm text-gray-700 mb-2">
            <span className="font-semibold">Bot:</span> Hello 👋, how can I help
            you today?
          </div>
          <div className="text-right text-sm text-green-700">
            <span className="font-semibold">You:</span> Tell me about indoor
            plants.
          </div>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3">
          <textarea
            placeholder="Type your message..."
            rows="1"
            className="flex-1 resize-none border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className="bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition cursor-pointer"
            aria-label="Send message"
          >
            <IoSendOutline size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
