import React, { useState } from "react";
import { InputField, Button, TransactionHistory } from "./InputForm";

const TransactionCard = (props) => {
  const { user } = props;
 
  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Transaction History</div>
        <TransactionHistory
          transaction="Send cash to Ranchodas"
          amount="1000"
          date="Sep 18, 2023"
          time="11:58 PM"
        />
      </div>
    </>
  );
};

export default TransactionCard;
