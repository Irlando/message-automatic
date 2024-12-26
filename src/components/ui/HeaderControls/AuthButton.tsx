import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../Button';
import { SignInModal } from '../../auth/SignInModal';

export const AuthButton: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const { user, signOut } = useAuth();
  const { t } = useLanguage();

  const handleClick = () => {
    if (user) {
      signOut();
    } else {
      setShowSignIn(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="flex items-center gap-2"
      >
        {user ? (
          <>
            <LogOut className="h-4 w-4" />
            {t('auth.signOut')}
          </>
        ) : (
          <>
            <LogIn className="h-4 w-4" />
            {t('auth.signIn')}
          </>
        )}
      </Button>
      
      {showSignIn && (
        <SignInModal onClose={() => setShowSignIn(false)} />
      )}
    </>
  );
};