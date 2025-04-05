import React from "react";

const Actions = () => {
  return (
    <section className="w-auto h-[720px] py-36 px-52">
      <div className="flex justify-around">
        <div className="bg-gradient-to-r bg-gray-100 pb-6 max-w-[420px] rounded-3xl shadow-lg">
          <div className="w-[420px] h-[240px] flex justify-center py-6">
            <img
              src="/home.png"
              alt="Home Image"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="">
            <div className="w-[80%] border-t border-white my-6 mx-auto"></div>
            <h2 className="text-3xl font-bold text-center text-black">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-center p-4 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, itaque.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <button className="border-2 border-white rounded-lg bg-white text-green-900 p-4 hover:bg-green-900 hover:text-white transition">
              Learn more
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r bg-gray-100 pb-6 max-w-[420px] rounded-3xl shadow-lg">
          <div className="w-[420px] h-[240px] flex justify-center py-6">
            <img
              src="/property.png"
              alt="Home Image"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="">
            <div className="w-[80%] border-t border-white my-6 mx-auto"></div>
            <h2 className="text-3xl font-bold text-center text-black">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-center p-4 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, itaque.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <button className="border-2 border-white rounded-lg bg-white text-green-900 p-4 hover:bg-green-900 hover:text-white transition">
              Learn more
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r bg-gray-100 pb-6 max-w-[420px] rounded-3xl shadow-lg">
          <div className="w-[420px] h-[240px] flex justify-center py-6">
            <img
              src="/rent.png"
              alt="Home Image"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="">
            <div className="w-[80%] border-t border-white my-6 mx-auto"></div>
            <h2 className="text-3xl font-bold text-center text-black">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-center p-4 text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, itaque.
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <button className="border-2 border-white rounded-lg bg-white text-green-900 p-4 hover:bg-green-900 hover:text-white transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
