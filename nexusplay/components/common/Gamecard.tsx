import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";
import { PiHeartBold } from "react-icons/pi";
import { AiFillStar } from 'react-icons/ai';
import { GameCardProps } from '@/interfaces';



const GameCard = ({ id, name, rating, price, image }: GameCardProps) => {
  // Render star rating (0-5 with half stars)
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => {
      const starValue = i + 1;
      return (
        <AiFillStar
          key={i}
          className={`w-4 h-4 ${
            rating >= starValue
              ? 'text-yellow-400'
              : rating >= starValue - 0.5
              ? 'text-yellow-400 opacity-80'
              : 'text-gray-300 dark:text-gray-600'
          }`}
          fill="currentColor"
          
        />
      );
    });
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/games/${id}`} className="block relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </Link>
      <div className="p-4">
        <Link href={`/games/${id}`}>
          <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-black ">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between ">
          <span className="text-xl font-bold text-black ">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center justify-center">
            <Link href="/wishlist">
              <button
                title="wishlist"
                className=" p-2 bg-gray-100 text-black mr-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <PiHeartBold className="w-5 h-5 " />
              </button>
            </Link>
            <Link href="/cart">
              <button
                title="cart"
                className="items-center p-2 text-black bg-gray-100 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;