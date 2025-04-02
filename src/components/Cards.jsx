import React from "react";

const Cards = () => {
  return (
    <section className="p-12 grid justify-items-center">
      <div className="grid grid-cols-3 justify-items-center gap-16">
        <div className="border-2 text-center w-xs">
          <img src="#" alt="" className="border-2 h-[200px]" />
          <div>
            <h4>Property title</h4>
            <p>Some info about the property</p>
            <a href="">More info</a>
          </div>
        </div>

        <div className="border-2 text-center w-xs ">
          <img src="#" alt="" className="border-2 h-[200px]" />
          <div>
            <h4>Property title</h4>
            <p>Some info about the property</p>
            <a href="">More info</a>
          </div>
        </div>

        <div className="border-2 text-center w-xs">
          <img src="#" alt="" className="border-2 h-[200px]" />
          <div>
            <h4>Property title</h4>
            <p>Some info about the property</p>
            <a href="">More info</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
