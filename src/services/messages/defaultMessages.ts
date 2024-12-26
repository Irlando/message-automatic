import { MessageCategory, MessageTone } from '../../types';

type DefaultMessages = {
  [K in MessageCategory]: {
    [T in MessageTone]: string[];
  };
};

export const defaultMessages: DefaultMessages = {
  congratulations: {
    casual: [
      "Way to go! 🎉 You totally nailed it!",
      "Awesome job! 🌟 Keep crushing it!",
      "You're on fire! 🔥 Congrats!"
    ],
    formal: [
      "Congratulations on your remarkable achievement. 🎊",
      "Your success is well-deserved. Congratulations! 🌟",
      "A sincere congratulations on your accomplishment. ✨"
    ]
  },
  love: {
    casual: [
      "You mean the world to me! ❤️",
      "You're the best thing that's ever happened to me! 💕",
      "Just thinking about you makes me smile! 🥰"
    ],
    formal: [
      "My deepest affection for you knows no bounds. 💝",
      "You have my eternal devotion and love. ❤️",
      "My heart is forever yours. 💕"
    ]
  },
  satisfaction: {
    casual: [
      "Thanks for being awesome! 🙌",
      "You rock! Seriously! 🤘",
      "Super happy with this! 😊"
    ],
    formal: [
      "I greatly appreciate your exceptional service. ⭐",
      "Your dedication to excellence is commendable. 🌟",
      "Thank you for exceeding all expectations. ✨"
    ]
  },
  other: {
    casual: [
      "Hey there! Hope you're having a great day! 😊",
      "Just wanted to say hi! 👋",
      "Keep being amazing! ✨"
    ],
    formal: [
      "I hope this message finds you well. 🌟",
      "Wishing you continued success. ⭐",
      "Best regards and warm wishes. ✨"
    ]
  }
};