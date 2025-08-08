import React from 'react';
import Image from 'next/image';
import { Game } from '@/interfaces'
import Searchbar from "@/components/common/searchbar";



export default function Wishlist() { 
  const games: Game[] = []; 

  return (
    <div>
      <Searchbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Wishlist</h1> 
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Wishlist ({games.length})</h1> 
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Wishlist Items */}
            <div className="md:col-span-2 space-y-4">
              {games.length === 0 ? (
                <div className="items-center justify-center p-8 rounded-lg text-center">
                  <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    onClick={() => (window.location.href = "/categories")}
                  >
                    Browse Games
                  </button>
                </div>
              ) : (
                games.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
                  >
                    {/* Game Image */}
                    <div className="relative w-20 h-24 flex-shrink-0 mr-4">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, 80px"
                        priority
                      />
                    </div>
                    {/* Game Info*/}
                    <div className="flex-grow">
                      <h3 className="font-medium text-lg">{game.title}</h3>
                      {/* Add other game details as needed */}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-800">
                        Move to Cart
                      </button>
                      <button className="text-gray-600 hover:text-gray-700">
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Summary Column*/}
            {games.length > 0 && (
              <div className="md:col-span-1">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Wishlist Summary</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}