import GameCard from './Gamecard'; // Ensure consistent casing
import { GameGridProps } from '@/interfaces';

const GamesGrid = ({ games }: GameGridProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map(game => (
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

      {games.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
            No games found
          </h3>
        </div>
      )}
    </div>
  );
};

export default GamesGrid;