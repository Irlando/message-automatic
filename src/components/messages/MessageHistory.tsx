import React from 'react';
import { useMessageHistory } from '../../hooks/useMessageHistory';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageDisplay } from './MessageDisplay';

export const MessageHistory: React.FC = () => {
  const { messages } = useMessageHistory();
  const { t } = useLanguage();

  if (!messages.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('history.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <MessageDisplay
            key={msg.id}
            id={msg.id}
            message={msg.content}
            category={msg.category}
            tone={msg.tone}
            date={new Date(msg.createdAt).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
};