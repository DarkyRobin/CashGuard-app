import React, { useState } from "react";
import { Logout } from "./InputForm";

const Header = (props) => {
  const { user } = props;
  const logOut = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <header className="flex justify-between items-center bg-blue-300 p-4">
        <div className="flex text-2xl text-neutral-100 font-bold">
          CashGuard
        </div>
        <Logout type="submit" id="logout" label="Logout" onClick={ logOut }/>
      </header>
    </>
  );
};

export default Header;
