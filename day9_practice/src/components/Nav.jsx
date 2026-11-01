import React from "react";

const Nav = ({ setToggle }) => {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 rounded-xl flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">UserHub</h1>

      {/* Middle Links */}
      <div className="flex gap-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Services
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      {/* Right Button */}
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Create Users
      </button>
    </nav>
  );
};

export default Nav;
