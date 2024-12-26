import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const AccountDetails: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">{t('profile.accountDetails')}</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">{t('profile.email')}:</span> {user?.email}
        </p>
      </div>
    </div>
  );
};