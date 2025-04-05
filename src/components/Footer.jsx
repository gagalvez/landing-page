import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(25,101,30,0.88)] py-8 px-4 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Quick Links
          </h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-all duration-300"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-all duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition-all duration-300"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <p className="text-center md:text-right text-sm md:text-lg font-light">
            © 2025 HavenGreen. All rights reserved.
          </p>
          <p className="text-center md:text-right text-sm text-gray-400">
            1234 Lorem Ipsum Street, Suite 5678, Ipsum City, Dolor Sit, 98765
            Country
          </p>
        </div>
      </div>

      <div className="w-[80%] border-t border-white my-6 mx-auto"></div>
      <div className="flex justify-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-all duration-300"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-all duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-all duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};


export default Footer
