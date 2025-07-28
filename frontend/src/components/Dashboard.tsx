import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProfileCard {
  userId: number;
  username: string;
  fullName: string;
  title: string;
  location: string;
  profilePicture: string | null;
  summary: string;
}

interface DashboardProps {
  isAuthenticated: boolean;
  currentUsername?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ isAuthenticated, currentUsername }) => {
  const [profiles] = useState<ProfileCard[]>([
    {
      userId: 1,
      username: 'shubham',
      fullName: 'Shubham M Chavan',
      title: 'Software Developer',
      location: 'Mumbai, Maharashtra, India',
      profilePicture: '14ee38eb-3feb-4d0d-9200-62ff0f9d8d70.jpg',
      summary: 'Passionate software developer with expertise in modern web technologies.'
    },
    // Add more static profiles as needed
  ]);
  const [loading] = useState(false);
  const [error] = useState('');

  // useEffect(() => {
  //   fetchProfiles();
  // }, []);

  // const fetchProfiles = async () => {
  //   try {
  //     const response = await axios.get('/api/dashboard/profiles');
  //     setProfiles(response.data);
  //   } catch (error) {
  //     console.error('Error fetching profiles:', error);
  //     setError('Failed to load profiles');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Dashboard</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Profiles</h1>
          <p className="text-gray-600">
            Discover talented professionals and their work profiles
          </p>
          
          {/* Registration and Login Links for non-authenticated users */}
          {!isAuthenticated && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Join Our Community</h3>
                  <p className="text-sm text-gray-600">Create your professional profile and connect with others</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No profiles found</h3>
            <p className="text-gray-600">Be the first to create a professional profile!</p>
            {!isAuthenticated && (
              <div className="mt-4">
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Create Your Profile
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.userId}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-200">
                      {profile.profilePicture ? (
                        <img
                          src={`/profile-pictures/${profile.profilePicture}`}
                          alt={profile.fullName}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold ${profile.profilePicture ? 'hidden' : ''}`}>
                        {profile.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{profile.fullName}</h3>
                      <p className="text-sm text-gray-600">{profile.title}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profile.location}
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-3">
                      {profile.summary}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/profile/${profile.username}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                    >
                      View Profile
                    </Link>
                    
                    {isAuthenticated && currentUsername === profile.username && (
                      <Link
                        to="/my-profile"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                      >
                        Edit
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isAuthenticated && (
          <div className="mt-8 text-center">
            <Link
              to="/my-profile"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Manage My Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 