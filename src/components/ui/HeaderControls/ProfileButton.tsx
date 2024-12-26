import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../IconButton';
import { useLanguage } from '../../../contexts/LanguageContext';

export const ProfileButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <IconButton
      Icon={User}
      label={t('profile.title')}
      onClick={() => navigate('/profile')}
    />
  );
};