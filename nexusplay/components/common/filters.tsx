import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { categoriesList } from "@/constants";
import { FiltersProps } from "@/interfaces"


const Filters = ({ selectedCategory, onCategoryChange }: FiltersProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col items-end gap-4 h-[60px] w-full">
      {" "}
      {/*Dropdown*/}
      <div className="hs-dropdown relative inline-flex mb-8">
        <button
          id="category-dropdown"
          type="button"
          className="hs-dropdown-toggle py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-label="Category dropdown"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          Categories
          <RiArrowDropDownLine
            className={`hs-dropdown-open:rotate-180 w-4 h-4 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        <div
          className={`hs-dropdown-menu absolute right-0 z-10 min-w-30 p-2 bg-white font-semibold shadow-md rounded-lg transition-all duration-200 ${
            dropdownOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          }`}
          role="menu"
        >
          <div className="p-1 space-y-1">
            <button
              role="menuitem"
              onClick={() => {
                onCategoryChange("All");
                setDropdownOpen(false);
              }}
              className={`w-full text-left flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm ${
                selectedCategory === "All"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
            </button>
            {categoriesList.map((category) => (
              <button
                key={category}
                role="menuitem"
                onClick={() => {
                  onCategoryChange(category);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left flex items-center gap-x-3.5 p-5 py-2 px-3 rounded-lg text-sm ${
                  selectedCategory === category
                    ? " bg-blue-100 text-blue-800 "
                    : "text-gray-950 hover:bg-gray-200 hover:text-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;