import React, { useState } from 'react';
import { Grid, Bookmark, Tag, Heart, MessageCircle, Play } from 'lucide-react';

const PostsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    { 
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 89,
      comments: 12,
      isVideo: false
    },
    { 
      url: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 156,
      comments: 8,
      isVideo: false
    },
    { 
      url: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 203,
      comments: 15,
      isVideo: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex items-center gap-1.5 px-6 py-4 text-xs font-semibold tracking-wide border-t transition-colors ${
                activeTab === 'posts'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid size={12} />
              POSTS
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-1.5 px-6 py-4 text-xs font-semibold tracking-wide border-t transition-colors ${
                activeTab === 'saved'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <Bookmark size={12} />
              SAVED
            </button>
            <button
              onClick={() => setActiveTab('tagged')}
              className={`flex items-center gap-1.5 px-6 py-4 text-xs font-semibold tracking-wide border-t transition-colors ${
                activeTab === 'tagged'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <Tag size={12} />
              TAGGED
            </button>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="aspect-square relative group cursor-pointer overflow-hidden"
              >
                <img
                  src={post.url}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Video indicator */}
                {post.isVideo && (
                  <div className="absolute top-2 right-2">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                      <Heart size={20} fill="white" />
                      <span className="font-bold text-sm">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <MessageCircle size={20} fill="white" />
                      <span className="font-bold text-sm">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-black rounded-full flex items-center justify-center">
              <Bookmark size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-light text-black mb-2">Save</h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.
            </p>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-black rounded-full flex items-center justify-center">
              <Tag size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-light text-black mb-2">Photos of you</h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              When people tag you in photos, they'll appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsGrid;