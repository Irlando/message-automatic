export interface Translations {
  en: TranslationStrings;
  pt: TranslationStrings;
}

export interface TranslationStrings {
  title: string;
  subtitle: string;
  auth: {
    signIn: string;
    signUp: string;
    signOut: string;
    email: string;
    password: string;
    switchToSignUp: string;
    switchToSignIn: string;
    optional: string;
  };
  display: {
    title: string;
    copyButton: string;
  };
  categories: {
    congratulations: string;
    love: string;
    satisfaction: string;
    other: string;
  };
  tones: {
    casual: string;
    formal: string;
  };
  motivational: {
    messages: string[];
  };
}