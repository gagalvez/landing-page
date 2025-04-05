import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center pt-17">
      <div className="bg-white grid box-border p-12 shadow-[10px_10px_20px_rgba(0,0,0,0.1)] rounded-sm">
        <div className="pb-8">
          <h2 className="font-bold text-center text-xl text-emerald-900 p-4">
            SEARCH FOR AVAILABLE PROPERTIES
          </h2>
        </div>
        <div className="flex justify-center gap-8 h-10">
          <input
            type="text"
            id="filter"
            placeholder="Location"
            className="text-center text-2xl"
          />
          <div className="w-[1px] h-3xl bg-gray-400 rounded-xl"></div>
          <input
            type="text"
            id="filter"
            placeholder="Property Type"
            className="text-center text-2xl"
          />
          <div className="w-[1px] h-3xl bg-gray-400 rounded-xl"></div>
          <input
            type="text"
            id="filter"
            placeholder="Budget"
            className="text-center text-2xl"
          />
          <div className="w-[1px] h-3xl bg-gray-400 rounded-xl"></div>
          <button className="flex justify-center items-center w-35 bg-[rgb(25,101,30)] p-6 text-white font-bold rounded-lg align-middle hover:scale-105 transition-transform duration-300 ease-out">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
