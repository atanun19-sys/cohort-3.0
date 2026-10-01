import React, { useState } from "react";

const Login = ({ setToggle }) => {
  let handdleClick = () => {
    setToggle((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState([]);

  let handdleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(userData);

  let handdleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, formData]);
    setFormData({ email: "", password: "" });
  };
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="w-[400px] h-[450px] p-10 bg-white shadow-lg rounded-[10px] flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <form
          action=""
          onSubmit={handdleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            required
            value={formData.email}
            name="email"
            className="border rounded-[5px] p-2"
            type="email"
            placeholder="Enter Email"
            onChange={handdleChange}
          />

          <input
            required
            value={formData.password}
            name="password"
            className="border rounded-[5px] p-2"
            type="password"
            placeholder="Enter Password"
            onChange={handdleChange}
          />

          <button className="p-2 bg-blue-600 text-white text-[1.1rem] rounded-[5px]">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <span className="text-blue-900 cursor-pointer" onClick={handdleClick}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
