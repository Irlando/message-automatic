import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { AuthButton } from '../ui/HeaderControls/AuthButton';
import { LanguageSelector } from '../ui/HeaderControls/LanguageSelector';
import { ProfileButton } from '../ui/HeaderControls/ProfileButton';
import { useAuth } from '../../contexts/AuthContext';

export const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">Message Generator</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {user && <ProfileButton />}
            <AuthButton />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};