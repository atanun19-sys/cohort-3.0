import React from "react";
import Form from "./Form";

const App = () => {
  return (
    <div className="p-10">
      <div className="p-10 flex flex-col gap-3 border w-[400px] border-black rounded-[10px]">
        <h1 className="font-semibold text-[1.4rem]">
          Hello user please fill this form-
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default App;
