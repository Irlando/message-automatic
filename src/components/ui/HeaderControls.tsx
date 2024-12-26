import React from 'react';
import { AuthButton } from '../auth/AuthButton';
import { LanguageSelector } from '../LanguageSelector';

export const HeaderControls: React.FC = () => {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-4">
      <AuthButton />
      <LanguageSelector />
    </div>
  );
};