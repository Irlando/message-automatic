import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from('favorites')
        .select('message_id')
        .eq('user_id', user.id);

      if (!error && data) {
        setFavorites(data.map(f => f.message_id));
      }
    };

    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (messageId: string) => {
    if (!user) return;

    const isFav = favorites.includes(messageId);

    if (isFav) {
      await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('message_id', messageId);
      setFavorites(favorites.filter(id => id !== messageId));
    } else {
      await supabase
        .from('favorites')
        .insert([{ user_id: user.id, message_id: messageId }]);
      setFavorites([...favorites, messageId]);
    }
  };

  const isFavorite = (messageId: string) => favorites.includes(messageId);

  return { toggleFavorite, isFavorite };
};