import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Language } from '../../../types';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
};