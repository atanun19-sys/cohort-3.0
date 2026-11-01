import React from "react";
import Form from "./Form";
import { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  let [arrayData, setArrayData] = useState([]);

  return (
    <div>
      <Form
      
        setArrayData={setArrayData}
      />
      <ProductCard arrayData={arrayData} />
    </div>
  );
};

export default App;
