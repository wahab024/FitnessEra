export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
