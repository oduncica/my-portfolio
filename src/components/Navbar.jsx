import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sections = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d0d0d] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Nom */}
        <h1 className="text-xl font-bold tracking-tight">Charlène Odunlami</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-[#4f46e5] transition-colors"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#18181b] border-t border-[#222]">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-lg hover:text-[#4f46e5] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
