import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-6 text-black bg-white">
      {/* Left: Logo */}
      <div className="h-20">
        <a href="#home">
          <img src="/navbar/logo.png" alt="logo" className="h-full" />
        </a>
      </div>

      {/* Hamburger: only visible on mobile */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Center: Nav Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10 text-sm font-medium px-6 py-4 md:p-0`}
      >
        <li>
          <a
            href="#about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            me
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            my work
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            my thoughts
          </a>
        </li>
        {menuOpen && (
          <div className="flex flex-col md:hidden space-y-2 px-6 pt-4 text-sm font-semibold border-t border-gray-200">
            <span>🌴 Los Angeles, CA</span>
            <a href="#" className="hover:underline">
              email
            </a>
            <a href="#" className="hover:underline">
              insta
            </a>
            <a href="#" className="hover:underline">
              linkedin
            </a>
          </div>
        )}
      </ul>

      {/* Right: Socials (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-4 text-sm font-semibold">
        <span>🌴 Los Angeles, CA</span>
        <a href="mailto:maddiehmhong@gmail.com" className="hover:underline">
          email
        </a>
        <a
          href="https://www.instagram.com/hmdehong"
          className="hover:underline"
          target="_blank"
        >
          insta
        </a>
        <a
          href="https://linkedin.com/in/maddiehong"
          className="hover:underline"
          target="_blank"
        >
          linkedin
        </a>
      </div>
      {/* Mobile-only socials */}
    </nav>
  );
}

export default Navbar;
