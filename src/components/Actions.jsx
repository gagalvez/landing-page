import React from "react";

const clientActions = [
{ id: 1, title: "Sell", img: "/home.png"},
{ id: 2, title: "Buy", img: "/property.png"},
{ id: 3, title: "Rent", img: "/rent.png"},
]

const Actions = () => {
  return (
    <section className="w-auto h-auto py-36 px-52">
      <div className="flex justify-around">
        {clientActions.map((actions) => (
          <div key={actions.id} className="bg-white pb-6 max-w-[420px] rounded-3xl shadow-lg">
            <div className="w-[420px] h-[240px] flex justify-center py-6">
              <img
                src={actions.img}
                alt={actions.title}
                className="rounded-lg shadow-md p-4"
              />
            </div>
            <div className="">
              <div className="w-[80%] border-t border-gray-600 my-6 mx-auto"></div>
              <h2 className="text-3xl font-bold text-center text-black">
                {actions.title}
              </h2>
              <p className="text-center p-4 text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, itaque.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <button className="border-2 border-white rounded-lg bg-white text-green-900 p-4 hover:bg-green-900 hover:text-white transition-all ease duration-300 ">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actions;
