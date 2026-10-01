import React from "react";

const UserCard = ({ user, index, userData,setUserData }) => {
  console.log(index);

  const DeleteCard = () => {
    const newData = [...userData];
    newData.splice(index, 1);
    setUserData(newData);
    console.log(userData);
  };
  return (
    <div className="p-5 flex flex-wrap">
      <div className="p-6 rounded-[5px] bg-white shadow-lg flex flex-col max-w-[350px] max-h-[350px]">
        <div className="h-60 w-full overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full rounded-[5px]"
          />
        </div>
        <div>
          <h3>Name-{user.name}</h3>
          <p>Email-{user.email}</p>
        </div>
        <button
          className="p-1 rounded-[5px] text-white bg-red-700 "
          onClick={DeleteCard}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
