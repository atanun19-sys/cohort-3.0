import React from "react";
import { useState } from "react";

const Usercard = ({ user, deleteUsers, ind, setToggle, setUpdatedData }) => {
  return (
    <div className=" flex flex-col gap-2 border border-white p-6 w-full max-w-70 h-100 bg-black">
      <div>
        <img
          className="object-cover object-[center_25%] w-full h-60 rounded"
          src={user.image}
          alt=""
        />
      </div>
      <div>
        <p>{user.name}</p>
        <p>{user.department}</p>
        <p>{user.email}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-green-600 px-4 py-1 rounded-[5px]"
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}
        >
          Update
        </button>
        <button
          className="bg-red-600 px-4 py-1 rounded-[5px]"
          onClick={() => {
            deleteUsers(user.id);
          }}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
