import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { AccountDetails } from './AccountDetails';
import { FavoriteMessages } from './FavoriteMessages';
import { MessageHistory } from '../../components/messages/MessageHistory';

export const Profile: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-gray-900">{t('profile.title')}</h1>
        
        <AccountDetails />
        
        <FavoriteMessages />
        
        <MessageHistory />
      </div>
    </div>
  );
};