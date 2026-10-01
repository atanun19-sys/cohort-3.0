import React, { useState } from "react";
import Register from "./Register";
import UserCard from "./UserCard";
import Login from "./Login";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex">
      {toggle ? (
        <Register
          setToggle={setToggle}
          setUserData={setUserData}
          userData={userData}
        />
      ) : (
        <Login setToggle={setToggle} />
      )}
      {userData.map((elem, index) => (
        <UserCard
          key={elem.email}
          user={elem}
          index={index}
          userData={userData}
          setUserData={setUserData}
        />
      ))}
    </div>
  );
};

export default App;
