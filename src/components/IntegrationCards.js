import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntegrationCards = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/form');
  };

  return (
    <div className="flex justify-start items-start h-screen p-10">
      <div className="grid grid-cols-4 gap-6 w-full">
        {/* Slack Card */}
        <div className="w-full sm:w-auto relative rounded-lg border bg-white p-6 font-normal border-zinc-200 hover:shadow-sm transition-all">
          <div className="flex flex-col gap-4 h-full">
            <span className="w-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
                alt="Slack Logo"
                className="w-10 h-10"
              />
            </span>
            <div className="flex-1">
              <div className="flex gap-2">
                <span className="text-zinc-800 font-medium">Slack</span>
              </div>
              <span className="whitespace-normal text-left text-sm text-zinc-500">
                Connect your chatbot with Slack, mention it, and have it reply to any message.
              </span>
            </div>
            <div className="flex w-full items-center justify-center gap-3 mt-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-gray-200 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-gray-100 rounded-xl disabled:bg-zinc-100/60 px-4 py-1 w-full h-10"
                type="button"
                aria-label="Slack"
                onClick={handleConnectClick}
              >
                Connect
              </button>
              <button data-state="closed" disabled>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-gray-200 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-gray-100 rounded-xl disabled:bg-zinc-100/60 w-9 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book h-5 w-5 text-zinc-500">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </button>
              </button>
            </div>
          </div>
        </div>

        {/* WordPress Card */}
        <div className="w-full sm:w-auto relative rounded-lg border bg-white p-6 font-normal border-zinc-200 hover:shadow-sm transition-all">
          <div className="flex flex-col gap-4 h-full">
            <span className="w-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174881.png"
                alt="WordPress Logo"
                className="w-10 h-10"
              />
            </span>
            <div className="flex-1">
              <div className="flex gap-2">
                <span className="text-zinc-800 font-medium">WordPress</span>
              </div>
              <span className="whitespace-normal text-left text-sm text-zinc-500">
                Use the official Chatcells plugin for WordPress to add the chat widget to your website.
              </span>
            </div>
            <div className="flex w-full items-center justify-center gap-3 mt-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-100 bg-transparent shadow-sm hover:bg-gray-200 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-gray-100 rounded-xl disabled:bg-zinc-100/60 px-4 py-1 w-full h-10"
                type="button"
                aria-label="WordPress"
                disabled
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCards;
