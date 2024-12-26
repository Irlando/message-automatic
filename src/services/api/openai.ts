import { OPENAI_CONFIG } from './config';
import { APIError, RateLimitError, NetworkError } from './errors';

export async function generateMessage(prompt: string, category: string, tone: string): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...OPENAI_CONFIG,
        messages: [{
          role: 'system',
          content: `You are a helpful assistant that generates ${tone} messages for ${category}. Include appropriate emojis in the response.`
        }, {
          role: 'user',
          content: prompt
        }],
      }),
    });

    if (response.status === 429) {
      throw new RateLimitError();
    }

    if (!response.ok) {
      throw new APIError('Failed to generate message');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    if (error instanceof TypeError) {
      throw new NetworkError();
    }
    throw new APIError('An unexpected error occurred');
  }
}