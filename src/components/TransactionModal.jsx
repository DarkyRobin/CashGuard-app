import React, { useState } from "react";
import { Button, ButtonCancel, InputField } from "./InputForm";
import { validateAmount } from "../modules/AccountHandler";

const TransactionModal = (props) => {
  const { isOpen, onClose, onTransaction, operation } = props;
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const onchangeAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateAmount(amount, operation);
    const msg = validation.msg;
    setMessage(msg);
    console.log(validation.msg)
    if(validation.status === 1) {
      setAmount("");
      setMessage("")
      onClose();
    }
    setAmount("");
    
    // Call the onDeposit function to handle the deposit
    // onTransaction(parseFloat(amount));
    
  };
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{ operation === 'send' ? 'Send' : operation === 'deposit' ? "Deposit" : 'Withdraw'}</p>
            <button className="modal-close cursor-pointer z-50" onClick={onClose}>&times;</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <InputField 
                id="amount"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={onchangeAmount}
              />
              { message && <small className="text-red-700">{message}</small> }
            </div>

            <div className="flex items-center justify-end mt-4 gap-3">
              <ButtonCancel onClick={onClose} id="close" label="Cancel" />
              <div className="mb-4">
                <button
                  type="submit"
                  className={`text-white font-bold py-2 px-4 rounded hover:bg-${operation === 'send' ? 'blue' : operation === 'deposit' ? 'green' : 'red'}-400 bg-${operation === 'send' ? 'blue' : operation === 'deposit' ? 'green' : 'red'}-500`}
                >
                  {operation === 'send' ? 'Send' : operation === 'deposit' ? 'Deposit' : 'Withdraw'}
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
