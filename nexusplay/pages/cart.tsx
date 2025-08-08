import React, { useState } from 'react';
import { FaHeart, FaRegTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from "@/components/common/searchbar";
import { cartGames } from "@/constants";

export default function Cart() {
  const [games, setGames] = useState(cartGames);

  const removeFromCart = (id: string) => {
    setGames(games.filter(game => game.id !== id));
  };
  const addToWishlist = (id: string) => {
    setGames(games.filter(game => game.id !== id));
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    setGames(games.map(game => 
      game.id === id ? {...game, quantity: Math.max(1, newQuantity)} : game
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Searchbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6"> Cart ({games.length})</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items Column */}
          <div className="md:col-span-2 space-y-4">
            {games.length === 0 ? (
              <div className="bg-white p-8 rounded-lg text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
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

                  {/* Game Info */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{game.title}</h3>
                    <p className="text-gray-600">${game.price.toFixed(2)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(game.id, (game.quantity || 1) - 1)
                        }
                        className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100">
                        {game.quantity || 1}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(game.id, (game.quantity || 1) + 1)
                        }
                        className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <button
                      onClick={() => removeFromCart(game.id)}
                      className="p-2 text-gray-700 hover:text-gray-400 hover:bg-red-200 rounded-full"
                      aria-label="Remove"
                    >
                      <FaRegTrashAlt />
                    </button>
                    <button
                      onClick={() => addToWishlist(game.id)}
                      className="p-2 text-gray-700 hover:text-gray-500 hover:bg-gray-200 rounded-full"
                      aria-label="Add to wishlist"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Column */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({games.length} items)</span>
                <span>
                  $
                  {games
                    .reduce(
                      (sum, game) => sum + game.price * (game.quantity || 1),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>
                  $
                  {games
                    .reduce(
                      (sum, game) => sum + game.price * (game.quantity || 1),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}