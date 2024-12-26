import React, { useState } from 'react';
import { MessageCategory, MessageTone, MessageRequest } from '../types';
import { Button } from './ui/Button';
import { Select } from './form/Select';

const CATEGORY_OPTIONS = [
  { value: 'congratulations', label: 'Congratulations' },
  { value: 'love', label: 'Love' },
  { value: 'satisfaction', label: 'Satisfaction' },
  { value: 'other', label: 'Other' }
];

const TONE_OPTIONS = [
  { value: 'casual', label: 'Casual' },
  { value: 'formal', label: 'Formal' }
];

interface MessageFormProps {
  onSubmit: (request: MessageRequest) => Promise<void>;
  isLoading: boolean;
}

export const MessageForm: React.FC<MessageFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState<MessageCategory>('congratulations');
  const [tone, setTone] = useState<MessageTone>('casual');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await onSubmit({ prompt, category, tone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl" name="messageForm">
      <div>
        <label htmlFor="message-prompt" className="block text-sm font-medium text-gray-700 mb-1">
          Your Request
        </label>
        <textarea
          id="message-prompt"
          name="message-prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Describe what kind of message you want..."
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          id="message-category"
          name="message-category"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value as MessageCategory)}
          options={CATEGORY_OPTIONS}
        />
        <Select
          id="message-tone"
          name="message-tone"
          label="Tone"
          value={tone}
          onChange={(e) => setTone(e.target.value as MessageTone)}
          options={TONE_OPTIONS}
        />
      </div>

      <Button
        type="submit"
        id="submit-button"
        name="submit-button"
        isLoading={isLoading}
        disabled={isLoading || !prompt.trim()}
      >
        Generate Message
      </Button>
    </form>
  );
};