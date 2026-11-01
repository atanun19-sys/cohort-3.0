import React, { useRef } from "react";
import { useState } from "react";

const Form = ({ setArrayData }) => {
  let formRef = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      pName: formRef.current.productName.value,
      cat: formRef.current.category.value,
      price: formRef.current.price.value,
      img: formRef.current.image.value,
    };
    setArrayData((prev) => [...prev, newProduct]);
  };
  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 border border-black p-10 w-[400px] h-[450px] rounded-[15px]"
      >
        <h1 className="text-[1.5rem]">Enter Product Details</h1>
        <select
          ref={(e) => {
            formRef.current.category = e;
          }}
          className="border border-gray-500 rounded-[5px]"
        >
          <option value="Mens">Mens</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <input
          ref={(e) => {
            formRef.current.productName = e;
          }}
          className="border border-gray-500 rounded-[5px] p-1"
          type="text"
          placeholder="Enter product name..."
        />
        <input
          ref={(e) => {
            formRef.current.price = e;
          }}
          className="border border-gray-500 rounded-[5px] p-1"
          type="text"
          placeholder="Enter product price..."
        />
        <input
          ref={(e) => {
            formRef.current.image = e;
          }}
          className="border border-gray-500 rounded-[5px] p-1"
          type="text"
          placeholder="Enter image URL..."
        />
        <button className="bg-blue-500 text-white p-1 rounded-[5px] ">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;