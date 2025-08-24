import React from 'react';
import { Settings, Grid, Bookmark, Tag, MoreHorizontal } from 'lucide-react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                <img
                  src="https://images.pexels.com/photos/23939733/pexels-photo-23939733.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h1 className="text-xl font-normal">arjun_fitness</h1>
              <div className="flex gap-2 justify-center md:justify-start">
                <button className="bg-blue-500 text-white px-4 py-1.5 text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  Follow
                </button>
                <button className="bg-gray-200 text-black px-4 py-1.5 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                  Message
                </button>
                <button className="bg-gray-200 text-black px-4 py-1.5 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                  Contact
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 mb-6">
              <div className="text-center md:text-left">
                <span className="font-semibold text-base">4</span>
                <span className="text-gray-600 text-base ml-1">posts</span>
              </div>
              <div className="text-center md:text-left">
                <span className="font-semibold text-base">892</span>
                <span className="text-gray-600 text-base ml-1">followers</span>
              </div>
              <div className="text-center md:text-left">
                <span className="font-semibold text-base">234</span>
                <span className="text-gray-600 text-base ml-1">following</span>
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-sm">
              <h2 className="font-semibold mb-1 text-sm">Arjun Kumar</h2>
              
              <p className="text-sm text-gray-700 mb-1">
                🏋️‍♂️ Gym Lover | Mumbai
              </p>
      
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex gap-6 mt-12 overflow-x-auto pb-2">
          {['Workouts', 'Progress'].map((highlight, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={index === 0 
                        ? "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=200"
                        : "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=200"
                      }
                      alt={highlight}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-900 mt-3 font-normal">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;