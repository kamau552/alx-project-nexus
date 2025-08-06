export type Slide = {
  id: number;
  src: string;
  alt: string;
};


export interface GameCardProps {
  id: string;
  name: string;
  rating: number;
  price: number;
  image: {
    src: string;
    alt: string;
  };
}


export type Game = {
  rating: number;
  id: string;
  title: string;
  platforms: string[];
  price: number;
  image: string;
  category: string[];
  systemRequirements: string;
  available: string[];
  status: 'available' | 'reserved' | 'sold-out' | 'coming_soon';
  description: string;
};