import { games as importedGames, categoriesList } from '@/constants';
import GameCard from './GameCard';
import { useState } from 'react';
import type { Game } from '@/interfaces'; // Adjust the import path if needed

// Use the imported Game type directly
const games: Game[] = importedGames;

const GamesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter games by category
  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categoriesList.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Games grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map(game => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.title}
            rating={game.rating}
            price={game.price}
            image={game.image}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
            No games found in this category
          </h3>
        </div>
      )}
    </div>
  );
};

export default GamesGrid;