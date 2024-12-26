import React from 'react';
import { MessageForm } from '../../components/MessageForm';
import { MessageDisplay } from '../../components/ui/MessageDisplay';
import { MotivationalMessages } from '../../components/messages/MotivationalMessages';
import { ErrorBoundary } from '../../components/ui/ErrorBoundary';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useMessageGenerator } from '../../hooks/useMessageGenerator';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { message, error, isLoading, generateNewMessage } = useMessageGenerator();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-12 w-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('subtitle')}
        </p>
        {!user && (
          <p className="text-sm text-gray-500 mt-2">
            {t('auth.optional')}
          </p>
        )}
      </div>

      <ErrorBoundary>
        <MotivationalMessages />

        <div className="space-y-8">
          <MessageForm onSubmit={generateNewMessage} isLoading={isLoading} />
          {message && <MessageDisplay message={message} error={error} />}
        </div>
      </ErrorBoundary>
    </div>
  );
};