import { openaiClient } from './client';
import { ChatMessage } from './types';

export async function generateMessage(
  prompt: string,
  category: string,
  tone: string
): Promise<string> {
  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `You are a helpful assistant that generates ${tone} messages for ${category}. Include appropriate emojis in the response.`
    },
    {
      role: 'user',
      content: prompt
    }
  ];

  return openaiClient.createChatCompletion(messages);
}