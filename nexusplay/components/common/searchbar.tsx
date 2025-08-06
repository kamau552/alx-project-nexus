"use client";
import React, { ChangeEvent, useState, useEffect } from 'react';
import { FiSearch, FiX } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export type searchBarProps = {
    placeholder?: string;
    onSearch?: (value: string) => void;
}

const Searchbar = (props: searchBarProps) => {
    const { onSearch } = props;
    const placeholderValue = "search categories, games, etc..."
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setSearchQuery(target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
            if (isMobile) setIsMobileSearchOpen(false);
        }
    };

    const handleSearch = () => {
        if (onSearch) onSearch(searchQuery);
        router.push(`/categories?search=${encodeURIComponent(searchQuery)}`);
    };

    function onClear() {
        setSearchQuery('');
        if (onSearch) onSearch('');
    };

    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
        if (isMobileSearchOpen && searchQuery) {
            handleSearch();
        }
    };

    return (
        <div className="relative flex justify-start items-center ml-0 lg:mx-12 mb-6">
            {/* Search input - always visible on desktop, conditionally on mobile */}
            <div className={`${isMobile ? (isMobileSearchOpen ? 'block' : 'hidden') : 'block'} relative w-full md:w-[400px] lg:w-[500px] ml-2`}>
                <input
                    type="search"
                    name="search"
                    placeholder={placeholderValue}
                    value={searchQuery}
                    className="w-full h-10 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    onChange={searchHandler}
                    onKeyDown={handleKeyDown}
                />
                
                {/* Clear button */}
                {searchQuery && (
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            onClear();
                        }}
                        className="absolute right-8 top-0 mt-3"
                        title="Clear search"
                        aria-label="Clear search"
                    >
                        <FiX className="text-gray-500 hover:text-gray-700" />
                    </button>
                )}

                {/* Search button */}
                <button
                    className="absolute right-2 top-0 mt-3"
                    title="Search"
                    aria-label="Search"
                    onClick={() => {
                        handleSearch();
                        if (isMobile) setIsMobileSearchOpen(false);
                    }}
                >      
                    <FiSearch className="text-gray-500" />
                </button>
            </div>

            {/* Mobile: Search icon (now on the right) */}
            {isMobile && !isMobileSearchOpen && (
                <button
                    onClick={toggleMobileSearch}
                    className="p-2 text-gray-500 hover:text-gray-700 ml-auto"
                    aria-label="Open search"
                >
                    <FiSearch className="text-xl" />
                </button>
            )}

            {/* Mobile: Close button */}
            {isMobile && isMobileSearchOpen && (
                <button
                    onClick={toggleMobileSearch}
                    className="absolute left-3 top-0 mt-3 ml-1"
                    aria-label="Close search"
                >
                    <FiX className="text-gray-500" />
                </button>
            )}
        </div>
    );
};

export default Searchbar;