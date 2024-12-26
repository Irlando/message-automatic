import { OPENAI_API_KEY, OPENAI_API_URL, OPENAI_CONFIG } from './config';
import { ChatMessage, ChatCompletionResponse } from './types';
import { APIError, RateLimitError, NetworkError } from '../errors';
import { RateLimiter } from './rateLimiter';
import { withRetry } from './retry';

const rateLimiter = new RateLimiter();

async function makeRequest(messages: ChatMessage[]): Promise<string> {
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      ...OPENAI_CONFIG,
      messages,
    }),
  });

  if (response.status === 429) {
    throw new RateLimitError();
  }

  if (!response.ok) {
    throw new APIError('Failed to generate message');
  }

  const data: ChatCompletionResponse = await response.json();
  return data.choices[0].message.content;
}

async function createChatCompletion(messages: ChatMessage[]): Promise<string> {
  try {
    return await rateLimiter.enqueue(() =>
      withRetry(() => makeRequest(messages), {
        maxRetries: 3,
        initialDelay: 1000,
        maxDelay: 10000
      })
    );
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

export const openaiClient = {
  createChatCompletion,
};