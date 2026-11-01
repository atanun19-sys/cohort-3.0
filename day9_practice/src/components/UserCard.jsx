import React from "react";

const UserCard = ({ user, setToggle,setUpdatedData,deleteUser }) => {
  return (
    <div className="w-72 bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <img
        src={user.image}
        alt="User"
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3 text-gray-800">{user.name}</h2>

      <p className="text-gray-500 text-sm mt-1">{user.email}</p>

      <p className="text-gray-700 mt-2">Department: {user.department}</p>

      <div className="flex gap-2 mt-4"> 
        <button
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}
        >
          Update
        </button>

        <button className="flex-1 bg-red-600 text-white py-2 rounded-lg"
        onClick={deleteUser()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
