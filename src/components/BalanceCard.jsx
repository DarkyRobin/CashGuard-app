import React, { useState } from "react";
import { InputField, Button } from "./InputForm";

const BalanceCard = (props) => {
  const { user } = props;

  const handleCashInClick = (e) => {
    e.preventDefault();
    console.log("Cash in clicked")
  }

  const handleCashoutClick = (e) => {
    e.preventDefault();
    console.log("Cash out clicked")
  }
  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Balance</div>
        <div className="text-2xl font-bold text-end" id="balance"><span>&#8369;</span>10,000</div>
        <div className=" flex flex-row justify-center gap-3 pt-3">
          <Button onClick={ handleCashInClick } id="cash_in" label="Cash In"/>
          <Button onClick={ handleCashoutClick } id="cash_out" label="Cash Out"/>
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
