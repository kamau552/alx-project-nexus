import React from "react";
import Image from "next/image";


const recentlyPlayed = [
  { 
    id: 1, 
    src: "/assets/images/simulation/bullysm.png",
    alt: "bully game image",
    title: "Bully scholarship edition", 
    time: "2 hours ago" 
  },
  { 
    id: 2, 
    src: "/assets/images/action/starfieldsm.png",
    alt: "starfield game image",
    title: "Starfield", 
    time: "1 day ago" 
  },
  { 
    id: 3, 
    src: "/assets/images/Adventure/detroit.png",
    alt: "detroit become human game",
    title: "Detroit become human", 
    time: "3 days ago" 
  },
];

export default function Recentlyplayed() {
  return (
    <div className="hidden lg:block lg:w-2/5">
      <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
      <div className="space-y-4">
        {recentlyPlayed.map((game) => (
          <div
            key={game.id}
            className="flex items-center p-4 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-700 hover:text-gray-600 transition"
          >
            <div className="w-11 h-17 rounded-md mr-4">
              <Image 
                src={game.src} 
                alt={game.alt} 
                width={64}
                height={64}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="font-medium text-black">{game.title}</h3>
              <p className="text-gray-600 text-sm">{game.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
