import React from "react";

const Products = ({ product, del }) => {
  return (
    <div className="p-10">
      <div className="w-full max-w-[290px] h-[500px] border flex flex-col gap-5 p-2 rounded-[5px]">
        <img
          src={product.image}
          alt="image is here"
          className="w-full h-[300px] rounded-[5px]"
        />
        <div>
          <p className="text-black text-[20px]">{product.title.slice(0, 25)}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
        <button
          className="p-2 bg-red-500 rounded-[5px] border"
          onClick={() => del(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Products;
