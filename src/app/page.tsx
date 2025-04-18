"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2">
              {/* User avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white shadow-lg" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">loved by</span>
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">10,000+ users</span>
              </div>
            </div>

            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
              Centralize your<br />
              online presence
            </h1>

            <p className="text-xl text-gray-600">
              Gather your socials, music, videos, and more on a beautiful link-in-bio page. Claim your name today!
            </p>

            <form onSubmit={handleClaim} className="flex items-center gap-2 p-2 bg-white rounded-full w-full max-w-md shadow-lg backdrop-blur-lg bg-opacity-80">
              <span className="text-gray-400 px-3">llinks.co/</span>
              <input
                type="text"
                placeholder="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 outline-none bg-transparent"
                required
                pattern="[a-zA-Z0-9-]+"
                title="Only letters, numbers, and hyphens are allowed"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 hover:shadow-xl"
              >
                Claim
              </button>
            </form>
          </div>

          {/* Right Column - Preview */}
          <div className="flex-1 relative">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 max-w-md mx-auto border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Your bio</div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 mb-3 shadow-lg" />
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">Gabby Rae</h2>
                  <p className="text-gray-500 text-sm text-center">
                    Content creator. Digital nomad.<br />
                    Let's grow together!
                  </p>
                </div>

                <div className="flex justify-center gap-3 my-4">
                  {['linkedin', 'instagram', 'twitter', 'dribbble'].map((social) => (
                    <a key={social} href="#" className="text-gray-600 hover:text-gray-900 transition-all">
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-purple-100 hover:to-indigo-100 shadow-sm transition-all" />
                    </a>
                  ))}
                </div>

                <div className="space-y-3">
                  {['Email', 'Folder', 'Link', 'Media', 'Mailing List'].map((item) => (
                    <button
                      key={item}
                      className="w-full py-3 px-4 rounded-xl text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-md cursor-pointer"
                      style={{
                        background: 
                          item === 'Email' ? 'linear-gradient(135deg, #E9D5FF 0%, #D8B4FE 100%)' :
                          item === 'Folder' ? 'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)' :
                          item === 'Link' ? 'linear-gradient(135deg, #86EFAC 0%, #4ADE80 100%)' :
                          item === 'Media' ? 'linear-gradient(135deg, #FDA4AF 0%, #FB7185 100%)' :
                          'linear-gradient(135deg, #FDE68A 0%, #FCD34D 100%)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                        color: item === 'Link' || item === 'Mailing List' ? '#065F46' : '#1F2937'
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
