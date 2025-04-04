import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center py-17">
      <div className="bg-white grid box-border p-12 shadow-[10px_10px_20px_rgba(0,0,0,0.1)] rounded-sm">
        <div className="pb-8">
          <h2 className="font-bold text-center">
            Search for available properties
          </h2>
        </div>
        <div className="flex justify-center gap-8 h-10">
          <input
            type="text"
            id="filter"
            placeholder="Location"
            className="text-center text-2xl"
          />
          <div className="w-[2px] h-full bg-gray-400 rounded-xl"></div>
          <input
            type="text"
            id="filter"
            placeholder="Property Type"
            className="text-center text-2xl"
          />
          <div className="w-[2px] h-full bg-gray-400 rounded-xl"></div>
          <input
            type="text"
            id="filter"
            placeholder="Budget"
            className="text-center text-2xl"
          />
          <div className="w-[2px] h-full bg-gray-400 rounded-xl"></div>
          <button className="grid justify-items-center w-40 h-auto  bg-gradient-to-r from-[rgb(25,101,30)] to-emerald-600 mx-auto p-2 text-white rounded-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
