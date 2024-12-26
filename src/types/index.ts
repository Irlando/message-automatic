export type MessageCategory = 'congratulations' | 'love' | 'satisfaction' | 'other';
export type MessageTone = 'formal' | 'casual';
export type Language = 'en' | 'pt';

export interface MessageRequest {
  prompt: string;
  category: MessageCategory;
  tone: MessageTone;
}

export interface GeneratedMessage {
  id?: string;
  content: string;
  category: MessageCategory;
  tone: MessageTone;
  createdAt: string;
  userId?: string;
}

export interface User {
  id: string;
  email: string;
}