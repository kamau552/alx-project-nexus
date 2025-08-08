import React from 'react';
import { useRouter } from 'next/router';
import { games } from '@/constants';
import Image from 'next/image';
import Link from 'next/link'
import { FaChevronLeft, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineInbox } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";


export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      i < Math.floor(rating) ? 
        <AiFillStar key={i} className="text-yellow-400" /> : 
        <FaRegStar key={i} className="text-yellow-400" />
    ));
  };

  // Find the specific game by ID
  const game = games.find((game) => game.id === id);

  if (!game) {
    return <div className="p-8 text-center">Game not found</div>;
  }
   
  return (
    <div className="p-2">
      {/* Top Nav */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-transparent"
      >
        {/* Back Button */}
        <Link href="/">
          <button
            type="button"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            <FaChevronLeft />
            <span className="ml-2">Back</span>
          </button>
        </Link>

        {/* Icons Container */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 rounded-full border-2 border-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Inbox"
          >
            <HiOutlineInbox className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-2 rounded-full border-2 border-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Notifications"
          >
            <IoNotificationsOutline className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Game Image and Info */}
      <div className="max-w-full h-auto gap-8 md:p-2 lg:p-8">
        <div className="relative rounded-lg overflow-hidden mb-1">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Game Name and Rating */}
          <div className="pt-10">
            <div className="absolute bottom-0 left-0 right-0 pt-4 text-Black">
              <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
              <div className="flex items-center">
                <div className="flex mr-4">{renderStars(game.rating)}</div>
                <span className="text-black font-semibold">
                  {game.rating.toFixed(1)}/5.0
                </span>
              </div>
            </div>
          </div>
          <div className="">
            {/* Genre*/}
            <div className="flex justify-end md:col-span-2">
              {/* Genre Tags */}
              <div className="flex flex-wrap gap-2 ">
                {game.category.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-300 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Purchase Section */}
        <div className="bg-transparent p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-3xl font-bold">
                ${game.price.toFixed(2)}
              </span>
              {game.status === "available" && (
                <span className="ml-3 px-1 py-1 bg-green-400 text-xs rounded">
                  In Stock
                </span>
              )}
            </div>
            <div className="flex gap-3 text-gray-900">
              <Link href="/wishlist">
                <button className="flex items-center justify-center p-3 bg-gray-300 hover:bg-gray-600 rounded-lg">
                  <FaHeart className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/cart">
                <button className="hidden md:flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-lg font-medium gap-2">
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button className="md:hidden p-3 bg-gray-500 hover:bg-indigo-700 rounded-full">
                  <FaShoppingCart className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/checkout">
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-medium">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-2">
        {/* Description */}
        <div className="mt-2 mb-8 lg:mt-2">
          <p className="text-black leading-relaxed">{game.description}</p>
        </div>
      </div>
      {/* Right Column - Details */}
      <div className="space-y-6">
        {/* Release Info */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Release Info</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Released</h3>
              <p>{game.releaseInfo.releaseDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Developer</h3>
              <p>{game.releaseInfo.developer || "Not specified"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Publisher</h3>
              <p>{game.releaseInfo.publisher || "Not specified"}</p>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Platforms</h2>
          <ul className="space-y-2">
            {game.platforms.map((platform, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {platform}
              </li>
            ))}
          </ul>
        </div>

        {/* System Requirements */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">System Requirements</h2>
          <div className="space-y-3">
            {typeof game.systemRequirements === "string" ? (
              <p>{game.systemRequirements}</p>
            ) : (
              Object.entries(game.systemRequirements).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="text-gray-400 capitalize w-40">{key}:</span>
                  <span>{value}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// Pre-generate all game pages at build time
export async function getStaticPaths() {
  return {
    paths: games.map((game) => ({
      params: { id: game.id }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const game = games.find((g) => g.id === params.id) || null;
  return {
    props: { game }
  };
}