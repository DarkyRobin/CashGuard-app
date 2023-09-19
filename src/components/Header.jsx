import React, { useState } from "react";

const Header = (props) => {
  const { user } = props;

  return (
    <>
      <header className="flex justify-between items-center bg-blue-300 p-4">
        <div className="flex">Logo Here</div>
        <div className="flex">Log Out</div>
      </header>
    </>
  );
};

export default Header;
