import React from "react";

const Contact = () => {
  
  return (
    <article className="w-full h-auto bg-white p-40">
      <div className="grid grid-cols-2 gap-40 justify-items-center">
        <div className="flex flex-col justify-center w-[720px]">
          <h1 className="text-center font-bold text-6xl mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-center text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            necessitatibus nemo labore ut, fugit, consequatur animi suscipit
            dolorem consectetur, ipsa quis neque ullam veniam! Recusandae
            aliquam commodi quod praesentium quis!
          </p>
          <div className="flex justify-center pt-16">
            <button className="w-auto h-auto py-4 px-12 bg-emerald-900 rounded-2xl text-white">
              Contact us
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center absolute bg-white w-[280px] h-auto rounded-2xl p-4 text-center inset-shadow-sm drop-shadow-2xl -left-12 -top-12">
            <h1 className="font-extrabold text-6xl">13k+</h1>
            <p className="text-xl">
              People found their <strong>DREAM</strong> home
            </p>
          </div>
          <img
            src="/contactHouse.webp"
            alt=""
            className="w-auto h-[480px] rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};

export default Contact;
