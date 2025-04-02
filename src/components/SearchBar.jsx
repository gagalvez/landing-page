import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-white w-2xl box-border p-10 shadow-[10px_10px_20px_rgba(0,0,0,0.1)]">
        <div className="pb-6">
          <p>Busca propiedades disponibles</p>
        </div>
        <input type="text" id="filter" placeholder="Location" />
        <input type="text" id="filter" placeholder="Property Type" />
        <input type="text" id="filter" placeholder="Budget" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
