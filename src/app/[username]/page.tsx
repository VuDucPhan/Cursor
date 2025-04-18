"use client";

import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    username: string
  }
}

export default function UserPage({ params }: PageProps) {
  if (!params?.username) {
    notFound()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`llinks.co/${params.username}`);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
            Your URL has been created!
          </h1>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-4">Your personal link is:</p>
            <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl">
              <span className="text-lg font-medium text-gray-900">
                llinks.co/{params.username}
              </span>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
                aria-label="Copy link to clipboard"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = `/customize/${params.username}`}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium"
            >
              Customize Your Page
            </button>
            <button 
              onClick={() => window.location.href = `/share/${params.username}`}
              className="w-full py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium text-gray-600"
            >
              Share Your Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 