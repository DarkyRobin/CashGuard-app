import React from "react";

const InputForm = (props) => {
  const { type, placeholder, value, onChange, id } = props;
  return (
    <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id = {id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputForm