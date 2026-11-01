import React from "react";

const Nav = ({ setToggle }) => {
  return (
    <div className="p-5">
      <div className="flex justify-between p-10 bg-red-500 h-[10px] items-center rounded-[0.5rem]">
        <h1 className="text-[1.6rem]">Logo</h1>
        <div className="flex gap-5">
          <p
            className="text-[1.3rem] cursor-pointer"
            onClick={() => {
              setToggle(true);
            }}
          >
            Home
          </p>
          <p
            className="text-[1.3rem] cursor-pointer"
            onClick={() => {
              setToggle(false);
            }}
          >
            Cart
          </p>
        </div>
        <div>
          <button className="bg-white px-4 py-1 rounded-[0.4rem] text-[1.3rem]">
            Create Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
