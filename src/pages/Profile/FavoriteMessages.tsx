import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageDisplay } from '../../components/messages/MessageDisplay';
import { useFavoriteMessages } from '../../hooks/useFavoriteMessages';

export const FavoriteMessages: React.FC = () => {
  const { t } = useLanguage();
  const { favoriteMessages } = useFavoriteMessages();

  if (!favoriteMessages.length) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">{t('profile.favorites')}</h2>
        <p className="text-gray-600">{t('profile.noFavorites')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{t('profile.favorites')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteMessages.map((msg) => (
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