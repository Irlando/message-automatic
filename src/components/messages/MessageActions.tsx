import React from 'react';
import { Share2, Star, Copy } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { copyToClipboard } from '../../utils/clipboard';
import { shareMessage } from '../../utils/share';
import { useFavorites } from '../../hooks/useFavorites';
import { SignInModal } from '../auth/SignInModal';

interface MessageActionsProps {
  message: string;
  messageId?: string;
}

export const MessageActions: React.FC<MessageActionsProps> = ({ message, messageId }) => {
  const [showSignIn, setShowSignIn] = React.useState(false);
  const { user } = useAuth();
  const { t } = useLanguage();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleShare = () => {
    shareMessage(message);
  };

  const handleFavorite = () => {
    if (!user) {
      setShowSignIn(true);
      return;
    }
    if (messageId) {
      toggleFavorite(messageId);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <IconButton
        Icon={Copy}
        label={t('actions.copy')}
        onClick={() => copyToClipboard(message)}
      />
      <IconButton
        Icon={Share2}
        label={t('actions.share')}
        onClick={handleShare}
      />
      {messageId && (
        <IconButton
          Icon={Star}
          label={t('actions.favorite')}
          onClick={handleFavorite}
          className={isFavorite(messageId) ? 'text-yellow-500' : ''}
        />
      )}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </div>
  );
}