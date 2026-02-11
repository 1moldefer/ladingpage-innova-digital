
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  icon: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
