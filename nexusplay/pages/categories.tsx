import React from 'react';
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Searchbar from "@/components/common/searchbar";
import GameCard from '../components/common/Gamecard';

export default function Categories() {
    const [searchValue, setSearchValue] = React.useState("");
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search');

    const handleSearch = (value: string) => {
        console.log(value);
        setSearchValue(value);
    }

    useEffect(() => {
        // Only set searchValue if there's a new search query
        if (searchQuery) {
            setSearchValue(searchQuery);
            console.log("Search query received:", searchQuery);
        } else {
            setSearchValue(""); // Clear search value when no query param
        }
    }, [searchQuery]);

    return (
        <div>
            <Searchbar onSearch={handleSearch}/>
            {/* Only show search results when there's an active search */}
            {searchValue && (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Search Results for</h1>
                    <p className="text-2xl">{searchValue}</p>
                </div>
            )}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                <p>Browse all game categories</p>
            </div>
            <div> <GameCard />
            </div>
        </div>
    );
}