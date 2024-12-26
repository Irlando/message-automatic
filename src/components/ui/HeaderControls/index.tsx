import React from 'react';
import { AuthButton } from './AuthButton';
import { LanguageSelector } from './LanguageSelector';
import { ProfileButton } from './ProfileButton';
import { useAuth } from '../../../contexts/AuthContext';

export const HeaderControls: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="absolute top-4 right-4 flex items-center gap-4">
      {user && <ProfileButton />}
      <AuthButton />
      <LanguageSelector />
    </div>
  );
};