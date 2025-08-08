export type Slide = {
  id: number;
  src: string;
  alt: string;
};

export interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface GameGridProps {
  games: Game[];
}


export interface GameCardProps {
  id: string;
  name: string;
  rating: number;
  price: number;
  image: string;
};

export interface systemRequirements {
  os?: string;
  processor?: string;
  memory?: string;
  graphics?: string;
  storage?: string;
  [key: string]: string | undefined;
}

export type Game = {
  releaseDate: string;
  developer: string;
  publisher: string;
  id: string;
  title: string;
  rating: number;
  price: number;
  image: string;
  platforms: string[];
  category: string[];
    systemRequirements: string | systemRequirements;
  available: string[];
  status: "available" | "reserved" | "sold-out" | "coming_soon";
  description: string;
  releaseInfo: {
    developer: string;
    releaseDate: string; 
    publisher: string;
  };
};

export interface CartGame {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

export interface CheckoutProps {
  games: CartGame[];
}

