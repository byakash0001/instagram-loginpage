import React, { useState, useEffect } from 'react';
import LoginOverlay from './components/LoginOverlay';
import ProfileHeader from './components/ProfileHeader';
import PostsGrid from './components/PostsGrid';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Login Overlay */}
      <LoginOverlay isOpen={showOverlay} onClose={handleCloseOverlay} />

      {/* Main Instagram Profile Page */}
      <div className={`transition-all duration-300 ${showOverlay ? 'blur-sm' : ''}`}>
        <ProfileHeader />
        <PostsGrid />
      </div>
    </div>
  );
}

export default App;