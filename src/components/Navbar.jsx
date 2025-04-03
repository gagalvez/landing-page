import React from 'react'

const navbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Properties",
        link: "/",
    },
    {
        id: 3,
        title: "Contact",
        link: "/",
    },
]

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-2" >
      <nav className="flex justify-between py-3 px-4 bg-[rgb(25,101,30)] items-center text-sm md:text-l ">
        <h1 className="text-sm md:text-lg font-bold text-white">Logo</h1>
        <ul className="flex gap-6 text-white text-lg">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
