import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  label: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  Icon, 
  label,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 ${className}`}
      title={label}
      type="button"
      {...props}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};