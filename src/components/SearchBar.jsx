import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-white w-2xl box-border p-6 shadow-[10px_10px_20px_rgba(0,0,0,0.1)] rounded-sm">
        <div className="pb-8">
          <h2 className="font-bold">Search for available properties</h2>
        </div>
        <div className="flex justify-center gap-8 h-10">
          <input
            type="text"
            id="filter"
            placeholder="Location"
            className="text-center bg-gray-100 rounded-md"
          />
          <input
            type="text"
            id="filter"
            placeholder="Property Type"
            className="text-center bg-gray-100 rounded-md"
          />
          <input
            type="text"
            id="filter"
            placeholder="Budget"
            className="text-center bg-gray-100 rounded-md"
          />
        </div>
        <button className="grid justify-items-center w-40 h-auto mt-6 bg-gradient-to-r from-[rgb(25,101,30)] to-emerald-600 mx-auto p-2 text-white rounded-sm">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
