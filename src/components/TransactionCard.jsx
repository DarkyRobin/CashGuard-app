import React, { useEffect, useState } from "react";
import { InputField, Button, TransactionHistory } from "./InputForm";
import { getAccount, getTransactionLogs } from "../modules/AccountHandler";

const TransactionCard = (props) => {
  const { uuid } = props;
  const account = getAccount(uuid);
  const [transLogs, setTransactionLogs] = useState([]);

  useEffect(() => {
    // Fetch transaction logs when the component mounts
    const transactionLogs = getTransactionLogs(account.id);
    setTransactionLogs(transactionLogs);
  }, [account.id]); 
  
  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Transaction History</div>
        {transLogs.length === 0 ? (
          <p>No transactions</p>
        ) : (
          transLogs.map((log) => (
            <TransactionHistory
              key={ log.id }
              transaction={ log.description }
              amount={ log.amount }
              date={log.date}
              time={log.time}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TransactionCard;
