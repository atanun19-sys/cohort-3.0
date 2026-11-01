import React from "react";
import Nav from "./Components/Nav";
import Usercard from "./Components/Usercard";
import Form from "./Components/Form";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  let deleteUsers = (id) => {
    let filterUser = users.filter((val) => {
      return val.id !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };
  return (
    <div className="p-3 flex flex-col gap-10">
      <Nav setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap  p-10 gap-3">
          {users.map((elem) => {
            return (
              <Usercard
                key={elem.id}
                user={elem}
                deleteUsers={deleteUsers}
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            updatedData={updatedData}
          />
        </div>
      )}
    </div>
  );
};

export default App;
