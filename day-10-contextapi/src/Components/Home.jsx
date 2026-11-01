import React from "react";

const Home = ({ products, setCartItems, setToggle }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-5">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((val) => {
          return (
            <div key={val.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={val.image}
                alt={val.title}
                className="h-48 w-full object-contain rounded mb-3"
              />
              <h2 className="font-semibold">{val.title}</h2>
              <p className="text-gray-500">{val.category}</p>
              <p className="font-bold mt-2">{val.price}</p>
              <button
                className="bg-black text-white px-4 py-2 rounded mt-3"
                onClick={() => {
                  setCartItems((prev) => [...prev, val]);
                  setToggle(false)
                }}
              >
                Add Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
