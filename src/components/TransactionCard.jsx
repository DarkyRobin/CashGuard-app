/* eslint-disable react/jsx-key */
import React from "react";

const TransactionCard = (props) => {
  const { transaction } = props;

  return (
    <>
      <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl m-4 w-80 h-auto">
        <div className="text-lg">Transaction History</div>
        {transaction.length === 0 ? (
          <p>No transactions</p>
        ) : (
          transaction.map((log) => (
            <div key={log.id}>
              <div className=" flex flex-col gap-3 pt-3">
                <div className="flex justify-between text-sm">
                  <div>{log.description}</div>
                  <div>
                    <span>&#8369;</span>
                    {log.amount}
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>
                    {log.date} {log.time}
                  </span>
                </div>
              </div>
              <div className="border-t border-4 border-gray-400 flex-grow"></div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TransactionCard;
