import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const MotivationalMessages: React.FC = () => {
  const { t } = useLanguage();
  const messages = t('motivational.messages');
  
  // Ensure messages is an array before mapping
  if (!Array.isArray(messages)) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {messages.map((message: string, index: number) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <Quote className="h-8 w-8 text-indigo-600 mb-4" />
          <p className="text-gray-700 italic">{message}</p>
        </div>
      ))}
    </div>
  );
};