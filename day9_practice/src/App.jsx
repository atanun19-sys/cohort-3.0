import React from "react";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [updatedData, setUpdatedData] = useState(null);

  let deleteUser = (id) => {
    console.log("delete button clicked");
  };

  return (
    <div className="p-4 flex flex-col gap-5">
      <Nav setToggle={setToggle} />
      {toggle ? (
        usersData.map((elem) => {
          return (
            <UserCard
              key={elem.id}
              user={elem}
              setToggle={setToggle}
              setUpdatedData={setUpdatedData}
              deleteUser={deleteUser}
            />
          );
        })
      ) : (
        <Form
          setUsersData={setUsersData}
          setToggle={setToggle}
          usersData={usersData}
          updatedData={updatedData}
        />
      )}
    </div>
  );
};

export default App;
