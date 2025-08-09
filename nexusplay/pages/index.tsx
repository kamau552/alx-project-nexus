import React from "react";
import { useState } from "react";
import { games as importedGames } from "@/constants";
import Searchbar from "@/components/common/searchbar";
import { HiOutlineInbox } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import Carousel from "@/components/common/carousel";
import Recentlyplayed from "@/components/common/recentlyplayed";
import Gamegrid from "@/components/common/Gamegrid";
import Filters from "@/components/common/filters";

export default function Home() {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSearch = (value: string) => {
    console.log(value);
    setSearchValue(value);
  };

  // Filter games by category
  const filteredGames =
    selectedCategory === "All"
      ? importedGames
      : importedGames.filter((game) =>
          game.category.includes(selectedCategory)
        );

  const slides = [
    {
      id: 1,
      src: "/assets/images/simulation/Bully.png", // Path to your PNG images
      alt: "Bully scholarship edition Games",
    },
    {
      id: 2,
      src: "/assets/images/Sports/fifalg.png",
      alt: "Fifa 24 image",
    },
    {
      id: 3,
      src: "/assets/images/simulation/Peaklg.png",
      alt: "Peak image",
    },
    {
      id: 4,
      src: "/assets/images/strategy/XCOM2lg.png",
      alt: "xcom2 strategy game",
    },
    {
      id: 5,
      src: "/assets/images/Adventure/littlenightmarelg.png",
      alt: "littlenightmare image",
    },
  ];

  return (
    <div className="pb-4">
      <div className="flex items-center justify-between pt-3 gap-4">
        <Searchbar onSearch={handleSearch} />
        <div className="flex items-center space-x-2 shrink-0 mb-8">
          <div className="p-2 rounded-full border-2 border-gray-100">
            <HiOutlineInbox className="w-4 h-4" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-100">
            <IoNotificationsOutline className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div>
        <div className=" hidden">
          <h1 className="text-2xl font-bold mb-4">Search Results</h1>
          <p className="text-2xl">{searchValue}</p>
        </div>
        <main>
          <div className="flex flex-col lg:flex-row gap-8 ">
            <Carousel slides={slides} />
            {/* Recently Played - Hidden on mobile, shown on desktop */}
            <Recentlyplayed />
          </div>
          <div className="mt-8">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <Gamegrid games={filteredGames} />
          </div>
        </main>
      </div>
    </div>
  );
}
