import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { GeneratedMessage } from '../types';

export const useFavoriteMessages = () => {
  const [favoriteMessages, setFavoriteMessages] = useState<GeneratedMessage[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setFavoriteMessages([]);
      return;
    }

    const fetchFavoriteMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .in('id', (await supabase
          .from('favorites')
          .select('message_id')
          .eq('user_id', user.id))
          .data?.map(f => f.message_id) || [])
        .order('created_at', { ascending: false });

      if (!error && data) {
        setFavoriteMessages(data);
      }
    };

    fetchFavoriteMessages();
  }, [user]);

  return { favoriteMessages };
};