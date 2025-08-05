
export type Game = {
  id: string;
  title: string;
  platforms: string[];
  price: number;
  image: string;
  genres: string[];
  systemRequirements: string;
  available: string[];
  status: 'available' | 'reserved' | 'sold-out' | 'coming_soon';
  description: string;
};