import React from 'react';
import { FiDownload } from "react-icons/fi";
import Searchbar from  "@/components/common/searchbar";
import GameCard from '@/components/common/Gamecard';
import { libraryGames, PCGames } from '@/constants';


export default function Library() {
  return (
    <div>
      <Searchbar />
      <div className="flex p-4 justify-between">
        <h1 className="text-2xl font-bold pt-2 mb-4">My Library</h1>
        <div>
          <button 
            className="p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg">
            <span>
              <FiDownload className="inline-block mr-2"/>
              Install Queue
            </span>
          </button>
        </div>
      </div>
      <div className="pt-2">
        <p className="font-semibold">Play later</p>
      </div>
      {/*games on wishlist*/}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
        {libraryGames.map(game => (
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
      {/*owned games*/}
      <div className="pt-15">
        <p className="font-semibold">My PC Games</p>
      </div>
      {/*games on wishlist*/}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
        {PCGames.map(game => (
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
    </div>
  );
}