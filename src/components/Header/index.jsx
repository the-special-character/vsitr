import React from "react";

const navLinks = [
  {
    id: 1,
    href: "#",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#contact",
    text: "Contact",
  },
];

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-container py-6 items-center fixed w-full">
      <a href="#" className="text-orange-400 font-semibold text-2xl">
        Yagnesh
      </a>
      <ul className="flex flex-row gap-6">
        {navLinks.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
