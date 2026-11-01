import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ setUsers, setToggle, users, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  let formSubmit = (data) => {
    if (updatedData) {
      //update code
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        });
      });
    } else {
      console.log(data);
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <form
      className="flex flex-col border border-white p-5 w-100 gap-3 bg-black"
      onSubmit={handleSubmit(formSubmit)}
    >
      <h1 className="text-[1.2rem]">Enter user details...</h1>
      <input
        {...register("name", {
          required: "Name is required",
          pattern: {
            value: /^\S/,
            message: "Blank spaces is not allowed.",
          },
        })}
        className="outline-none border border-white rounded p-2"
        type="text"
        placeholder="Enter Name..."
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        {...register("department", { required: "Department is required" })}
        className="outline-none border border-white rounded p-2"
        type="text"
        placeholder="Enter Department..."
      />
      {errors.department && (
        <p className="text-red-500">{errors.department.message}</p>
      )}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email",
          },
        })}
        className="outline-none border border-white rounded p-2"
        type="email"
        placeholder="Enter Email..."
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        {...register("mobile", {
          required: "Mobile is required",
          minLength: {
            value: 10,
            message: "Minimum 10 digits is required.",
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 digits is required.",
          },
        })}
        className="outline-none border border-white rounded p-2"
        type="number"
        placeholder="Enter mobile..."
      />
      {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}

      <input
        {...register("image", {
          required: "Image is required",
        })}
        className="outline-none border border-white  rounded p-2"
        type="url"
        placeholder="Enter Image..."
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      <button className="bg-blue-500 p-3 rounded-[5px]">Add User</button>
    </form>
  );
};

export default Form;
