import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-[20vw] gap-2">
        <label htmlFor="name">Name:</label>
        <input
          className="border outline-0  p-1.5 rounded-[5px]"
          type="text"
          placeholder="Enter your name..."
          id="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="border outline-0  p-1.5 rounded-[5px]"
          type="email"
          placeholder="Enter your email..."
          id="email"
        />
        <label htmlFor="feedback">Feedback:</label>
        <input
          className="border outline-0  p-1.5 rounded-[5px]"
          type="text"
          placeholder="Enter your feedback..."
          id="feedback"
        />
        <button className="px-5 py-2 bg-blue-500 text-white rounded-[25px] w-fit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
