import React from "react";

export const InputField = (props) => {
  const { type, placeholder, value, onChange, id } = props;
  return (
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Button = (props) => {
  const { label, onClick, id } = props;
  return (
    <div className="mb-4">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
        id={id}
      >
        {label}
      </button>
    </div>
  );
};
