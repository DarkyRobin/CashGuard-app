import React, { useState, useEffect } from "react";
import BalanceCard from "./BalanceCard";
import TransactionCard from "./TransactionCard";
import { getAccount, getTransactionLogs } from "../modules/AccountHandler";
const Main = (props) => {
  const { user, uuid } = props;
  const [transLogs, setTransactionLogs] = useState([]);
  const account = getAccount(uuid);
  
  useEffect(() => {
    const fetchTransactionLogs = async () => {
      const transactionLogs = await getTransactionLogs(account.id);
      setTransactionLogs(transactionLogs);
    };

    fetchTransactionLogs();
  }, [account.id]);

  const updateTransactionLogs = async () => {
    const updatedLogs = await getTransactionLogs(account.id);
    setTransactionLogs(updatedLogs);
  };

  return (
    <>
      <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div className="flex w-full mx-auto px-6 py-8 justify-center">
          <div className="flex flex-col center">
            <BalanceCard user={ user } uuid={ uuid } updateTransactionLogs={ updateTransactionLogs }/>
            <TransactionCard transaction={ transLogs } />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
