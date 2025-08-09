import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { games as importedGames } from "@/constants";
import Searchbar from "@/components/common/searchbar";
import Filters from "../components/common/filters";
import Gamegrid from "../components/common/gamegrid";

export default function Categories() {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  // Filter games by category
  const filteredGames =
    selectedCategory === "All"
      ? importedGames
      : importedGames.filter((game) =>
          game.category.includes(selectedCategory)
        );

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
    } else {
      setSearchValue("");
    }
  }, [searchQuery]);

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      {searchValue && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Search Results for</h1>
          <p className="text-2xl">{searchValue}</p>
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-gray-600">Browse all game categories</p>
        </div>
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <Gamegrid games={filteredGames} />
    </div>
  );
}
