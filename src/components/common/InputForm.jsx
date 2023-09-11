import React from "react";

const InputForm = (props) => {
  const {label, type, value} = props;
  return (
    <>
      <label>
        {label}
      </label>
      <input 
        type={type}
        id={type}
        type={type}
        value={value}
      />
    </>
  )
}

export default InputForm