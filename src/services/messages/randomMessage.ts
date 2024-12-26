import { supabase } from '../../lib/supabase';
import { MessageCategory, MessageTone } from '../../types';
import { defaultMessages } from './defaultMessages';

export async function getRandomMessage(category: MessageCategory, tone: MessageTone): Promise<string> {
  try {
    // Try to get a message from the database
    const { data, error } = await supabase
      .from('messages')
      .select('content')
      .eq('category', category)
      .eq('tone', tone);

    if (error) {
      throw new Error('Failed to fetch messages from database');
    }

    // If we have messages in the database, return a random one
    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex].content;
    }

    // If no messages in database, use default messages
    const defaultCategoryMessages = defaultMessages[category][tone];
    const randomIndex = Math.floor(Math.random() * defaultCategoryMessages.length);
    return defaultCategoryMessages[randomIndex];
  } catch (error) {
    // Fallback to default messages if database query fails
    const defaultCategoryMessages = defaultMessages[category][tone];
    const randomIndex = Math.floor(Math.random() * defaultCategoryMessages.length);
    return defaultCategoryMessages[randomIndex];
  }
}