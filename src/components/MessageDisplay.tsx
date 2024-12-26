import React from 'react';
import { Copy } from 'lucide-react';
import { IconButton } from './ui/IconButton';
import { copyToClipboard } from '../utils/clipboard';

interface MessageDisplayProps {
  message: string | null;
  error: string | null;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, error }) => {
  if (error) {
    return (
      <div className="w-full max-w-xl p-4 bg-red-50 rounded-md border border-red-200">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!message) {
    return null;
  }

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-900">Generated Message</h3>
        <IconButton
          Icon={Copy}
          label="Copy to clipboard"
          onClick={() => copyToClipboard(message)}
          id="copy-button"
          name="copy-button"
        />
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  );
};