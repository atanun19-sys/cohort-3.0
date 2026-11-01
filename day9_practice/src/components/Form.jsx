import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsersData, setToggle, usersData, updatedData }) => {
  let {
    reset,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  let formSubmit = (data) => {
    if (updatedData) {
      //update code
      setUsersData((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        });
      });
    } else {
      console.log(data);
      let arr = [...usersData, { ...data, id: nanoid() }];
      setUsersData(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">Add User</h2>

      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank space is not allowed",
            },
          })}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          {...register("department", { required: "Department is required" })}
          type="text"
          placeholder="Enter your department"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />
        {errors.department && (
          <p className="text-red-600">{errors.department.message}</p>
        )}

        <input
          {...register("image", { required: "Image is required" })}
          type="url"
          placeholder="Enter image link"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
