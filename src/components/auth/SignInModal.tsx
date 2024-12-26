import React from 'react';
import { SignInForm } from './SignInForm';
import { Modal } from '../ui/Modal';
import { useLanguage } from '../../contexts/LanguageContext';

interface SignInModalProps {
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const { t } = useLanguage();

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={t('auth.signIn')}
    >
      <SignInForm onSuccess={onClose} />
    </Modal>
  );
};