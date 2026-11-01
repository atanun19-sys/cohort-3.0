import React, { useState } from "react";

const ProductCard = ({ arrayData }) => {
  return arrayData.map((e, index) => {
    return (
      <div className="p-5 bg-gray-300" key={index}>
        <div className="flex flex-col gap-2 border p-5 w-50 h-70 bg-white border-none shadow-xl rounded-[5px]">
          <div className="w-40 h-50">
            <img
              src="https://images.unsplash.com/photo-1737188550207-df877c6392dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <p>Name: {e.pName}</p>
            <p>Price: {e.price}</p>
            <p>Category:{e.cat}</p>
          </div>
          <button className="bg-red-600 text-white rounded-[5px]">
            Delete
          </button>
        </div>
      </div>
    );
  });
};

export default ProductCard;
