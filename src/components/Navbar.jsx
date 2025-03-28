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
    <header className="fixed top-0 left-0 w-full ">
      <nav className="flex justify-around text-x py-4  bg-[rgb(25,101,30,0.88)] text-black">
        <h1 className="text-2xl font-bold ">Logo</h1>
        <ul className="flex gap-4 text-white text-lg">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
