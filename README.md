# AI Message Generator

A modern web application that generates personalized messages for various occasions using AI. Built with React, TypeScript, and Supabase.

![Message Generator](https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1200)

## Features

- 🤖 AI-powered message generation
- 💬 Multiple message categories:
  - Congratulations
  - Love
  - Satisfaction
  - Other
- 🎨 Customizable message tones:
  - Casual
  - Formal
- 👤 User Authentication
- 🌍 Multilingual Support (English/Portuguese)
- ⭐ Favorite Messages
- 📱 Responsive Design
- 📋 Message History
- 💾 Cloud Storage with Supabase

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - React Router DOM

- **Backend:**
  - Supabase (Authentication & Database)
  - OpenAI API (Message Generation)

- **Development:**
  - Vite
  - ESLint
  - PostCSS

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_key
   VITE_OPENAI_API_KEY=your_openai_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/        # React components
│   ├── auth/         # Authentication components
│   ├── layout/       # Layout components
│   ├── messages/     # Message-related components
│   └── ui/          # Reusable UI components
├── contexts/         # React contexts
├── hooks/           # Custom React hooks
├── pages/           # Application pages
├── services/        # API and external services
├── types/           # TypeScript types
└── utils/           # Utility functions
```

## Features in Detail

### Authentication
- Email/password authentication
- Protected routes
- User profile management

### Message Generation
- AI-powered message generation
- Multiple categories and tones
- Message history tracking
- Favorite messages system

### User Interface
- Clean, modern design
- Responsive layout
- Dark/light mode support
- Loading states and error handling

### Data Management
- Secure data storage with Supabase
- Real-time updates
- Row-level security
- Data persistence

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
