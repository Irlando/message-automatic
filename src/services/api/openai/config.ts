import { OpenAIConfig } from '../../../types/api';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API key');
}

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const OPENAI_CONFIG: OpenAIConfig = {
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  max_tokens: 150,
};