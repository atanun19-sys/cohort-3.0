import React, { useState } from "react";
import UserCard from "./UserCard";
const Register = ({ setUserData, userData, setToggle }) => {
  // const handdleClick = () => {
  //   setToggle((prev) => !prev);
  // };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userData);

  const handdleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handdleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="p-10">
      <div className="w-[400px] p-10 bg-white shadow-lg rounded-[10px] flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-center">Register</h1>
        <form
          action=""
          onSubmit={handdleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            required
            value={formData.name}
            name="name"
            onChange={handdleChange}
            className="border rounded-[5px] p-2"
            type="text"
            placeholder="Enter Name"
          />

          <input
            required
            value={formData.email}
            name="email"
            onChange={handdleChange}
            className="border rounded-[5px] p-2"
            type="email"
            placeholder="Enter Email"
          />

          <input
            required
            value={formData.password}
            name="password"
            onChange={handdleChange}
            className="border rounded-[5px] p-2"
            type="password"
            placeholder="Enter Password"
          />

          <button className="p-2 bg-blue-600 text-white text-[1.1rem] rounded-[5px]">
            Register
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <span className="text-blue-900 cursor-pointer" onClick={handleClick}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
