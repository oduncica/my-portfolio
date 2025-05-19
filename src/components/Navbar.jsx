import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d0d0d] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Nom */}
        <h1 className="text-xl font-bold tracking-tight">Charlène Odunlami</h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
            (section) => (
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
            )
          )}
          <li>
            <a
              href="/CV_Charlene_Odunlami.pdf"
              target="_blank"
              rel="noopener"
              className="bg-[#4f46e5] hover:bg-[#6366f1] text-white px-4 py-2 rounded-md transition"
            >
              Mon CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
