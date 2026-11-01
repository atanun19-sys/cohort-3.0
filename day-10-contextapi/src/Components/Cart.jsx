
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((items) => {
          return (
            <div
              key={items.id}
              className="w-full max-w-5xl bg-white rounded-xl shadow-md p-4 flex items-center gap-6"
            >
              <img
                src={items.image}
                alt={items.title}
                className="w-28 h-28 object-contain rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800">
                  {items.title}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {items.category}
                </p>

                <p className="text-xl font-bold text-green-700 mt-3">
                  ${items.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
