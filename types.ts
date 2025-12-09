export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
}