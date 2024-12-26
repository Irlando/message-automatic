import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { GeneratedMessage } from '../types';

export const useMessageHistory = () => {
  const [messages, setMessages] = useState<GeneratedMessage[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setMessages([]);
      return;
    }

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setMessages(data);
      }
    };

    fetchMessages();
  }, [user]);

  const saveMessage = async (message: Omit<GeneratedMessage, 'id' | 'createdAt'>) => {
    if (!user) return null;

    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          content: message.content,
          category: message.category,
          tone: message.tone,
          user_id: user.id
        }
      ])
      .select()
      .single();

    if (!error && data) {
      setMessages((prev) => [data, ...prev]);
      return data;
    }
    return null;
  };

  return { messages, saveMessage };
};