import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onLogout: () => void;
  username: string;
  onEdit: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, username, onEdit }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-primary-600">
              Work Profile
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, {username}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 