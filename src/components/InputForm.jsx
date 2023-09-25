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
  const { label, onClick, id, type } = props;

  return (
    <div className="mb-4">
      <button
        type={ type }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={ onClick }
        id={ id }
      >
        {label}
      </button>
    </div>
  );
};

export const ButtonCancel = (props) => {
  const { label, onClick, id, type } = props;

  return (
    <div className="mb-4">
      <button
        type= { type }
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={ onClick }
        id={ id }
      >
        { label }
      </button>
    </div>
  );
};

export const TransactionHistory = (props) => {
  const { transaction, amount, date, time } = props;

  return (
    <div className=" flex flex-col gap-3 pt-3">
      <div className="flex justify-between text-sm">
        <div>{ transaction }</div>
        <div><span>&#8369;</span>{ amount }</div>
      </div>
      <div className="flex justify-between text-xs">
        <span>{ date } { time }</span>
      </div>
    </div>
  );
};

export const Logout = (props) => {
  const { label, onClick, id, type } = props;

  return (
    <div className="flex">
      <button
        type= { type }
        className="text-white font-bold py-2 px-4"
        onClick={ onClick }
        id={ id }
      >
        { label }
      </button>
    </div>
  );
};
