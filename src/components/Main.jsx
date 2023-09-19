import React, { useState } from "react";
import BalanceCard from "./BalanceCard";
import TransactionCard from "./TransactionCard";

const Main = (props) => {
  const { user } = props;

  return (
    <>
      <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div className="flex w-full mx-auto px-6 py-8 justify-center">
          <div className="flex flex-col center">
            <BalanceCard />
            <TransactionCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;