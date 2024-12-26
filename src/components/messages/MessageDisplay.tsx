import React from 'react';
import { MessageCategory, MessageTone } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageActions } from './MessageActions';

interface MessageDisplayProps {
  message: string;
  error?: string | null;
  category?: MessageCategory;
  tone?: MessageTone;
  date?: string;
  id?: string;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ 
  message, 
  error,
  category,
  tone,
  date,
  id
}) => {
  const { t } = useLanguage();

  if (error) {
    return (
      <div className="w-full max-w-xl p-4 bg-red-50 rounded-md border border-red-200">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{t('display.title')}</h3>
          {category && tone && (
            <p className="text-sm text-gray-500">
              {t(`categories.${category}`)} • {t(`tones.${tone}`)}
              {date && ` • ${date}`}
            </p>
          )}
        </div>
        <MessageActions message={message} messageId={id} />
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  );
};