import { useState } from 'react';
import { MessageRequest } from '../types';
import { getRandomMessage } from '../services/messages/randomMessage';
import { useAuth } from '../contexts/AuthContext';
import { useMessageHistory } from './useMessageHistory';
import { useLanguage } from '../contexts/LanguageContext';

export function useMessageGenerator() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { t } = useLanguage();
  const { saveMessage } = useMessageHistory();

  const generateNewMessage = async (request: MessageRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedMessage = await getRandomMessage(
        request.category,
        request.tone
      );
      setMessage(generatedMessage);
      
      if (user) {
        await saveMessage({
          content: generatedMessage,
          category: request.category,
          tone: request.tone,
          userId: user.id
        });
      }
    } catch (err) {
      setError(t('errors.unexpected'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    message,
    error,
    isLoading,
    generateNewMessage
  };
}