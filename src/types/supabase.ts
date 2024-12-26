export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: string;
          content: string;
          category: string;
          tone: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          content: string;
          category: string;
          tone: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          content?: string;
          category?: string;
          tone?: string;
          user_id?: string;
          created_at?: string;
        };
      };
    };
  };
}